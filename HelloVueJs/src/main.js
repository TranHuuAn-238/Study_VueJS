import Vue from 'vue'
import App from './App.vue'
import store from './store';  // index la file mac dinh lay trong folder neu ko chi ro ten file


// cho store vao comp goc, coi giong nhu data
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue