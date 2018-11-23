<template>
<div>



  <div class="container col-md-8">
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
  </div>


</div>
</template>

<script>
import recipe from "./recipe";

export default {
  name: "container-component",
  components: {
    "recipe-component": recipe
  }
};
</script>
<style>
.container{
position: relative;
  top: 250px;
  bottom: 0px;
  z-index: -1;
}

</style>

