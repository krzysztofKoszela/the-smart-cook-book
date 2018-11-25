<template>
<div class="container col-md-10">

<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component>

 <!--<own-book-component></own-book-component>-->

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
  top: 50px;
  z-index: -1;
}

</style>

