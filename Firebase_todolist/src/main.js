import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DateTime from 'vue-datetime'

import 'vue-datetime/dist/vue-datetime.css'
import './assets/style.css';
import { auth } from "./config/firebase";

Vue.use(DateTime);

// lang nghe su thay doi cua currentUser cua firebase
auth.onAuthStateChanged(function(user) {
  if (user) {
    let data = {
      email: user.email,
      uid: user.uid
    }
    store.commit('SET_CURRENT_USER', data);
    router.push('/');
  } else {
    let data = {
      email: '',
      uid: ''
    }
    store.commit('SET_CURRENT_USER', data);
    router.push('/login');
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue