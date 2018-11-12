<template>
  <div id="app">
  <div>fdsfsdfds</div>
 <menu-label-component></menu-label-component>
    <router-view/>
  </div>
</template>

<script>
import menuLabel from './components/menuLabel'

export default {
  name: 'App',
  components:{'menu-label-component' : menuLabel}
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
