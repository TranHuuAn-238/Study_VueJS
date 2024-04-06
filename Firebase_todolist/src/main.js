import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DateTime from 'vue-datetime'

import 'vue-datetime/dist/vue-datetime.css'
import './assets/style.css';

import database from './config/firebase';

Vue.use(DateTime);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue