// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import menuLabel from './components/menuLabel'
import login from './components/login'
import recipe from './components/recipe'
import register from './components/register'
import search from './components/search'
import container from './components/container'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


