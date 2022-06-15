<template>
  <div>
    <svg-icon icon-class="haizhe"></svg-icon>
    <HelloWorld />
    <svg-icon icon-class="doufu"></svg-icon>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/svgIcon/'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SvgIcon
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
