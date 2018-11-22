<template>
  <div class="container">

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
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
.tab-content {
  /*position: absolute;*/
  top: 250px;
  left: 100px;
  right: 100px;
  bottom: 0px;
  overflow-y: scroll;

}
</style>

