<template>
  <div class="log ">


  <div class="form-group ">
    <label for="exampleInputEmail1">Login</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Hasło</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
   <div class="form-group">
       <label for="exampleInputPassword1">Nie pamietasz hasła?</label>
  </div>
  <button type="submit" class="button_log col-md-12">Zaloguj</button>


  <!-- Use any element to open/show the overlay navigation menu -->
<button  @click="openNav" class="button_log col-md-12">Rejestracja</button>

  </div>
</template>

<script>

export default {
  name: 'login-component',
  methods: {
    openNav: function() {
      document.getElementById("myNav").style.width = "100%";
    }
  }
}
</script>
<style>
ul{
  margin: 0px;
  padding-right: 10px;
padding-left: 10px;
}
.button_log{
  margin-top: 5px;
}
.col-center-block {
    float: none;
    display: block;
    margin: 0 auto;
    /* margin-left: auto; margin-right: auto; */
}
</style>

