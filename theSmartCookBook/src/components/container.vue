<template>
  <div class="container">


<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component></div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><recipe-component></recipe-component>
<recipe-component></recipe-component>
<recipe-component></recipe-component></div>
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
z-index: 1;
}
.tab-content {
  position: absolute;
  top: 250px;
  left: 100px;
  right: 100px;
  bottom: 0px;
  overflow-y: scroll;
  z-index: 1;

}
.d {
}
</style>

