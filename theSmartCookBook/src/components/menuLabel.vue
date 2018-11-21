<template>
<div class="menu-nav">
  <a href="#homePage">Ikona</a>
  <a href="#categories">Kategorie</a>

  <search-component></search-component>

  <b-dropdown class="menu" text="Zaloguj">
     <ul>
  <login-component class="menu2"></login-component>
 </ul>
  </b-dropdown>
  <a href="#contakt">Kontakt</a>
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
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  display: flex;
}
</style>
