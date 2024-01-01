import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue