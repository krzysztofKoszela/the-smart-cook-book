<template>
  <div id="app">
 <menu-component></menu-component>

 <container-component></container-component>
    <router-view/>


 <register-component>
  </register-component>

  </div>
</template>

<script>
import menuLabel from './components/menuLabel'
import search from './components/search'
import container from './components/container'
import register from './components/register'
export default {
  name: 'App',
  components:{
    'menu-component' : menuLabel,
    'register-component' : register,
    'search-component' : search,
    'container-component' :container

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
