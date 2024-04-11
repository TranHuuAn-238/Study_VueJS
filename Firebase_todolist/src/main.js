import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DateTime from 'vue-datetime'

import 'vue-datetime/dist/vue-datetime.css'
import './assets/style.css';

import database from './config/firebase';

var tasksRef = database.ref('tasks');

// retrieve data from firebase
tasksRef.on('value', function(snapshot) {
    // console.log("snap", snapshot);
    console.log(snapshot.toJSON());
    store.commit('SET_LIST_TASKS', snapshot.toJSON());
    // snapshot.forEach(function(childSnapshot) {
    //   var childData = childSnapshot.val();
    //   console.log(childData);
    // });
});

Vue.use(DateTime);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue