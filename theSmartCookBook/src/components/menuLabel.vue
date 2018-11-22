<template>
<div class="menu-nav">
  <a href="#homePage"><i class="fa fa-home"></i></a>

  <search-component></search-component>

  <b-dropdown text="Zaloguj">
     <ul>
  <login-component></login-component>
 </ul>
  </b-dropdown>
  <a href="#contakt">Kontakt</a>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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
#__BVID__7{
  position: inherit;
}
</style>
