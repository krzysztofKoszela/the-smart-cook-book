<template>
<div class="menu-nav">
<div >
  <a href="#homePage"><i class="fa fa-home"></i></a>

  <search-component></search-component>

  <b-dropdown class="menu" text="Zaloguj">
     <ul>
  <login-component class="menu2"></login-component>
 </ul>
  </b-dropdown>
  <a href="#contakt">Kontakt</a>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</div>
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
</div>
</template>

<script>
import login from "./login";
import search from  "./search";

export default {
  name: "menu-component",
  components: {
    "login-component": login,
    "search-component": search
  }
};
</script>

<style>
.menu-nav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
height: 200px;
}
search-component{
 z-index: 2;
  position: relative;
}
</style>
