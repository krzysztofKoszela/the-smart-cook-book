<template>
  <div>

 <form action="action_page.php">
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
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  </div>
</template>

<script>
export default {
  name: 'login-component'
}
</script>
