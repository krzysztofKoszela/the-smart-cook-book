<template>
  <div class="log">


  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
   <div class="form-group">
       <label for="exampleInputPassword1">Nie pamietasz hasła?</label>
  </div>
  <button type="submit" class="btn btn-primary">Zaloguj</button>


  <!-- Use any element to open/show the overlay navigation menu -->
<button @click="openNav">Rejestracja</button>

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

</style>

