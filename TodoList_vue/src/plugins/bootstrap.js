import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// dang ky plugin BootstrapVue o cap toan cuc o day - component nao cung goi ra dung dc, ko can phai khai bao o tung comp
Vue.use(BootstrapVue)

// import file css, neu ko co './' se tu hieu la import tu node_modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
