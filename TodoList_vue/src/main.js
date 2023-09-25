import Vue from 'vue'
import App from './App.vue'

import './plugins';   // tu dong import file index.js dau tien tim thay trong folder plugin, neu muon import file khac phai chi ro file ra

// main.js -> index.js (trong plugins)
// index.js -> Goi toan bo plugin khac o ben ngoai

new Vue({
  el: '#app',
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue