import Vue from 'vue'
import Vuex from 'vuex'

import listBlogs from '../mock/blogs';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listBlogs
    },
    getters: {

    }
});

export default store;