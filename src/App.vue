<template>
  <div id="app">
    <h1>Productivity App</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import playground from './playground'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  // This function is automatically run by VUE framework 
  created () {
    playground()
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
</style>
