import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import database from '../config/firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listTasks: {},
        isLoading: false
    },
    getters: {
        
    },
    mutations: {
        SET_LOADING: (state, loading = false) => {
            state.isLoading = loading;
        },
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