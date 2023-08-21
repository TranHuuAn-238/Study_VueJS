<template>
  <div id="app">
    <!-- goi component ra nhu 1 the html -->
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader /> -->
    <!-- nen dung cach nay: name cua component -->
    <comp-header />
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <comp-footer />
  </div>
</template>

<script>
/**
 * app
 *  header
 *  listProduct
 *    product1
 *    product2
 *    product3
 *  footer
 * 
 */

// muon sd component nao thi dung import
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'

export default {
  // sau khi import xong thi dang ky cac component trong obj 
  components: { CompHeader, CompFooter },
  name: 'app',
  data () {
    return {
      msg: 'Hello man'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
