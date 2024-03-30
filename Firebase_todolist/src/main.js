import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/style.css';

import database from './config/firebase';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue