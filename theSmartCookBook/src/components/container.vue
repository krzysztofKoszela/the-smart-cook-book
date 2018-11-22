<template>
  <div class="container">


<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>

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
  left: 100px;
  right: 100px;
  bottom: 0px;
  z-index: -1;
}

</style>

