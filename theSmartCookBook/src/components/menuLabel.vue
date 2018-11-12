<template>
  <div>

<div>
  <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">

<login-component></login-component>

  </b-dropdown>
</div>

  </div>

</template>

<script>
import login from './login'

export default {
  name: 'menu-component',
  components:{
    'login-component' : login

  }
}
</script>
