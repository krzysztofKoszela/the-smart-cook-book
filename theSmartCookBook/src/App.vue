<template>
  <div id="app">
  <div>fdsfsdfds</div>
 <menu-component></menu-component>
 <recipe-component></recipe-component>

 <button id="show-modal" @click="showRegisterModal = true">Register</button>
  <register-component v-if="showRegisterModal" @close="showRegisterModal = false">
  </register-component>

 <search-component></search-component>
 <container-component></container-component>
    <router-view/>
  </div>
</template>

<script>
import menuLabel from './components/menuLabel'
import recipe from './components/recipe'
import register from './components/register'
import search from './components/search'
import container from './components/container'

export default {
  name: 'App',
  components:{
    'menu-component' : menuLabel,
    'recipe-component' : recipe,
    'register-component' : register,
    'search-component' : search,
    'container-component' :container

  },
  data () {
      return {
        showRegisterModal: false
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
</style>
