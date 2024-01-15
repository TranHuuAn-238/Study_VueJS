import './plugins';
import './assets/style.css'
import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';

import './demoAsyc';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue