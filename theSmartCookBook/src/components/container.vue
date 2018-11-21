<template>
  <div class="container">

container
 <recipe-component></recipe-component>

  </div>
</template>

<script>
import recipe from "./recipe";

export default {
  name: 'container-component',
  components:{
    'recipe-component' : recipe
  }
}
</script>
