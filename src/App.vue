<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <layer-header></layer-header>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import LayerHeader from './components/header.vue'
// console.log(LayerHeader)
Vue.component('LayerHeader', LayerHeader)
export default {
  name: 'app',
  // components: {Header}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
}
</style>
