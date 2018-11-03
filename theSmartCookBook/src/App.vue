<template>
  <div id="app">
    <router-view/>

    <!-- wstawic do poszczegolnych komponentow home-->

 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <li class="nav-item">
         <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">SIGN IN</a>
      </li>
       <li class="nav-item">
         <a class="nav-link" href="#">SIGN UP</a>
      </li>
    </ul>
</nav>

<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action">kat 1</button>
  <button type="button" class="list-group-item list-group-item-action">kat 2</button>
  <button type="button" class="list-group-item list-group-item-action">kat 3</button>
  <button type="button" class="list-group-item list-group-item-action">kat 4</button>
</div>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


    <!--koniec-->

<!-- wstawic do poszczegolnych komponentow user profile-->

<!--koniec-->

<!-- wstawic do poszczegolnych komponentow login-->
<form>
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
<!--koniec-->

<!-- wstawic do poszczegolnych komponentow registration-->
<form>
    <div class="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Username">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<!--koniec-->

<!-- wstawic do poszczegolnych komponentow user profile-->
<h3>Krzysztof Koszela</h3>
<!--profile photo-->
<p> Czesc witajcie na moim profilu</p>
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">moja ksiazka</a>
  <a href="#" class="list-group-item list-group-item-action">ulubione</a>
  <a href="#" class="list-group-item list-group-item-action">obserwujesz</a>
  <a href="#" class="list-group-item list-group-item-action">obeserwujacy</a>
</div>
<div>dodaj przepis ikona
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
<!--koniec-->

</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
