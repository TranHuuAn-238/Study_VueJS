import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import moduleCart from "./cart";
import moduleProduct from "./product";

const myPlugin = (store) => {
    // called when the store is initialized - plugin duoc chay khi store duoc khoi tao
    console.log('myPlugin run', store);
    store.subscribe((mutation, state) => {
        // subscribe duoc chay sau khi mutation duoc kich hoat
        console.log('subscribe run - ', mutation, ' - ', state);
        // called after every mutation.
        // The mutation comes in the format of `{ type, payload }`.
    })
}

const store = new Vuex.Store({
    // strict: true,   // kich hoat strict mode: chi cho phep thay doi duoc state o mutations
    strict: process.env.NODE_ENV !== 'production', // chi dung strict trong moi truong dev, moi truong product thi khong dung
    state,
    getters,
    actions,
    mutations,
    modules: {
        cart: moduleCart,
        product: moduleProduct
    },
    plugins: [myPlugin]
});

// console.log("store = ", store.state.cart.count);
store.commit('increment'); // commit mutations cua root
store.commit('product/increment', 30); // commit mutations cua modules(getters hay actions cung tuong tu) - truyen them ten cua module o truoc


// truong hop root va modules deu co mutation cung ten thi commit se goi dong thoi ca 2 mutations => su dung namespaced de goi mutations cua modules
// root -> increment
//      product -> increment
//      cart

export default store