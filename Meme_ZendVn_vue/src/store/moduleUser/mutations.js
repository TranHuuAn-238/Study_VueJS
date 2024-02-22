import Vue from 'vue';
import { CONFIG_ACCESS_TOKEN } from "../../constants";
export default {
    SET_USER_INFO(state, user) {
        Vue.set(state.users, user.USERID, user);
    },
    SET_USER_POSTS(state, { posts, userid }) {
        Vue.set(state.posts, userid, posts);
    },
    SET_LOGOUT(state) {
        // state.ACCESS_TOKEN = '';
        state[CONFIG_ACCESS_TOKEN] = '';
        state.currentUser = null;
        localStorage.removeItem(CONFIG_ACCESS_TOKEN);
    },
    SET_LOGIN_INFO(state, { user = null, token = '' }) {
        localStorage.setItem(CONFIG_ACCESS_TOKEN, token);
        // state.ACCESS_TOKEN = token;
        state[CONFIG_ACCESS_TOKEN] = token;
        state.currentUser = user;
    },
    SET_CURRENT_USER(state, user) {
        state.currentUser = user;
    }
}

// truyen bien ma ko phai truyen string thi dung ngoac vuong nhu array: state[CONFIG_ACCESS_TOKEN]