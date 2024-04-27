import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import { auth, tasksRef, usersRef } from '../config/firebase';
import { STATUS_CONFIG } from '../config/const';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentUser: {
            email: '',
            uid: ''
        },
        listUsers: {},
        listTasks: {},
        isLoading: false
    },
    getters: {
        isLogin: state => {
            if (state.currentUser.email !== '' && state.currentUser.uid !== '') {
                return true;
            }
            return false;
        },
        getListTaskFilter: (state) => {
            const listTasks = state.listTasks;
            let todo = [],
                inProgress = [],
                toVerify = [],
                done = [];
            // for obj
            for(let key in listTasks) {
                let value = listTasks[key];
                let data = {
                    id: key,
                    ...value
                }
                if (value.status === STATUS_CONFIG.TODO.value) {
                    todo.push(data);
                } else if (value.status === STATUS_CONFIG.IN_PROGRESS.value) {
                    inProgress.push(data);
                } else if (value.status === STATUS_CONFIG.TO_VERIFY.value) {
                    toVerify.push(data);
                } else if (value.status === STATUS_CONFIG.DONE.value) {
                    done.push(data);
                }
            }
            return {
                todo,
                inProgress,
                toVerify,
                done
            }
        },
        getListEmailUser: state => {
            const listUsers = state.listUsers;
            let arrEmails = [];
            for (let key in listUsers) {
                let value = listUsers[key];
                arrEmails.push(value.email);
            }
            return arrEmails;
        }
    },
    mutations: {
        SET_LOADING: (state, loading = false) => {
            state.isLoading = loading;
        },
        SET_LIST_TASKS: (state, data) => {
            state.listTasks = data;
        },
        SET_LIST_USERS: (state, data) => {
            state.listUsers = data;
        },
        SET_CURRENT_USER: (state, user) => {
            state.currentUser = user;
        }
    },
    actions: {
        setLoading({ commit }, loading = false) {
            commit('SET_LOADING', loading)
        },
        onListenerTasks({ commit }) {
            let flag = false;
            commit('SET_LOADING', true);

            // retrieve data from firebase
            tasksRef.on('value', function(snapshot) {
                if(flag === false) {
                    flag = true;
                    commit('SET_LOADING', false);
                }

                // console.log("snap", snapshot);
                // console.log(snapshot.toJSON());
                commit('SET_LIST_TASKS', snapshot.toJSON());
                // snapshot.forEach(function(childSnapshot) {
                //   var childData = childSnapshot.val();
                //   console.log(childData);
                // });
            });
        },
        onListenerUsers({ commit }) {
            usersRef.on('value', function(snapshot) {
                commit('SET_LIST_USERS', snapshot.toJSON());
            });
        },
        async createTask({ commit }, data) {
            commit('SET_LOADING', true);
            try {
                let taskId = uuidv4();
                await tasksRef.child(taskId).set(data);
                commit('SET_LOADING', false);
                return {
                    ok: true,
                    error: null
                }

            } catch (e) {
                commit('SET_LOADING', false);
                return {
                    ok: false,
                    error: e.message
                }
            }
        },
        async login({ commit }, { email, password }) {
            commit('SET_LOADING', true);
            try {
                let result =  await auth.signInWithEmailAndPassword(email, password);
                let user = {
                    email: email,
                    uid: result.user.uid
                }
                commit('SET_CURRENT_USER', user);
                commit('SET_LOADING', false);
                return {
                    ok: true,
                    error: null
                }
            } catch (error) {
                console.log(error);
                commit('SET_LOADING', false);
                return {
                    ok: false,
                    error: error.message
                }
            }
        },
        async register({ commit }, { email, password }) {
            commit('SET_LOADING', true);
            try {
                let result =  await auth.createUserWithEmailAndPassword(email, password);
                await usersRef.child(result.user.uid).set({
                    email: email,
                    role: 'member'
                });
                let user = {
                    email: email,
                    uid: result.user.uid
                }
                commit('SET_CURRENT_USER', user);
                commit('SET_LOADING', false);
                return {
                    ok: true,
                    error: null
                }
            } catch (error) {
                console.log(error);
                commit('SET_LOADING', false);
                return {
                    ok: false,
                    error: error.message
                }
            }
        },
        async getTaskById({ commit }, id) {
            try {
                let result = await tasksRef.child(id).once('value');
                if (result.val()) {
                    return {
                        ok: true,
                        task: result.val()
                    }
                }
                return {
                    ok: false,
                    task: null,
                    error: null
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e.message
                }
            }
        }
    }
});

export default store;