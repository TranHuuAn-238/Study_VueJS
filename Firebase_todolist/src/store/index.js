import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import database from '../config/firebase';
import { STATUS_CONFIG } from '../config/const';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listTasks: {},
        isLoading: false
    },
    getters: {
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
        }
    },
    mutations: {
        SET_LOADING: (state, loading = false) => {
            state.isLoading = loading;
        },
        SET_LIST_TASKS: (state, data) => {
            state.listTasks = data;
        }
    },
    actions: {
        setLoading({ commit }, loading = false) {
            commit('SET_LOADING', loading)
        },
        async createTask({ commit }, data) {
            commit('SET_LOADING', true);
            try {
                let taskId = uuidv4();
                await database.ref('tasks/' + taskId).set(data);
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
        }
    }
});

export default store;