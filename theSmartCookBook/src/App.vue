<template>
  <div id="app">
  <div>fdsfsdfds</div>
 <menu-component></menu-component>
 <login-component></login-component>
 <recipe-component></recipe-component>
 <register-component></register-component>
 <search-component></search-component>
 <container-component></container-component>
    <router-view/>
  </div>
</template>

<script>
import menuLabel from './components/menuLabel'
import login from './components/login'
import recipe from './components/recipe'
import register from './components/register'
import search from './components/search'
import container from './components/container'

export default {
  name: 'App',
  components:{
    'menu-component' : menuLabel,
    'login-component' : login,
    'recipe-component' : recipe,
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
