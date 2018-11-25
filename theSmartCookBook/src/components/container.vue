<template>
<div class="container">
<!--
  <div class="container col-md-10">
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
  </div>-->

</div>
</template>

<script>
import recipe from "./recipe";
import ownBook from "./ownBook";

export default {
  name: "container-component",
  components: {
    "recipe-component": recipe,
    "own-book-component": ownBook
  }
};
</script>
<style>
.container{
position: relative;
  top: 100px;
  bottom: 0px;
  z-index: -1;
}

</style>

