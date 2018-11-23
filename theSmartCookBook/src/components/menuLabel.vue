<template>
<div class="menu-nav">

  <div class="col-md-2">
  <a href="#homePage"><i class="fa fa-home" ></i></a>
  </div>
  <div class="col-md-6 c">
  <search-component class="col-md-12"></search-component>
  </div>

<div class="col-md-4">
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
  }
};
</script>

<style>
.fa-home.fa{
  color: white;
  font-size: 50px;
}
.menu-nav {
  background-color: #333;
position: fixed;
  top: 0;
  width: 100%;
display: flex;
height: 100px;
}
.l{

}
.c{
 /*float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/
}
.r{


}

#__BVID__7{
  position: relative;
}
</style>
