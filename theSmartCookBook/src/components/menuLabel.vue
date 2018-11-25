<template>
<div class="menu-nav">

  <div class="col-md-2">
  <a href="#homePage"><i class="fa fa-home" ></i></a>
  </div>
  <div class="col-md-8 c">
  <search-component class="col-md-12"></search-component>
  </div>

<div class="col-md-2">

<b-dropdown text="Moje konto">
    <b-dropdown-item>Moja książka</b-dropdown-item>
    <b-dropdown-item @click="openRecipeNav">Dodaj przepis</b-dropdown-item>
  </b-dropdown>

  <b-dropdown text="Zaloguj">
     <ul>
  <login-component></login-component>
 </ul>
  </b-dropdown>


  <a href="#contakt">Kontakt</a>
</div>
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
},
methods: {
    openRecipeNav: function() {
      document.getElementById("myNavv").style.width = "100%";
    }
  }
};
</script>
<style src="./../../dist/static/css/lightTheme.css"></style>
<style>
.fa-home.fa{
  font-size: 50px;
}
.menu-nav {
position: fixed;
  top: 0;
  width: 100%;
display: flex;
height: 80px;
z-index: 1;
padding-top: 15px;
}

</style>


