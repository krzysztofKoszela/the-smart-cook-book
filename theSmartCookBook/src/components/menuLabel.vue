<template>
  <div>

<div class="menu-nav">
   <div class="menu-nav-left">
  <a href="#homePage">Ikona</a>
  <a href="#categories">Kategorie</a>
   </div>
  <a href="#findRecipe">wyszukaj przepis</a>

   <div class="menu-nav-right">
  <b-dropdown id="ddown1" text="Zaloguj" class="m-md-2">
     <ul>
  <login-component></login-component>
 </ul>
  </b-dropdown>
  <a href="#contakt">Kontakt</a>
</div>

</div>
  </div>
</template>

<script>
import login from "./login";

export default {
  name: "menu-component",
  components: {
    "login-component": login
  }
};
</script>
<style>
.menu-nav {

  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
.menu-nav-left {
  float: left;
}
.menu-nav-right {
  float: right;
}
</style>
