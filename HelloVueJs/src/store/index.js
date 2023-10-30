import Vue from 'vue'
import Vuex from "vuex";
import state from './state'
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

// tao store chứa dữ liệu, giống như data
// const store = Vuex({
const store = new Vuex.Store({
  // state() { return { ... } }
  // Start State   
  state: state,

  // Start Getters   
  getters: getters,

  // Start Mutations
  mutations: mutations,

  // Start Actions
  actions: actions

})

export default store;