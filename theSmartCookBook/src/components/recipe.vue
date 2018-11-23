<template>
<div class="recipe">
    <img class="col-md-4" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg">
    <div class="col-md-4">
    <h5 class="card-title">nazwa przepisu</h5>
    <p class="card-text">kategoria</p>
    <p class="card-text">poziom trudności</p>
    <p class="card-text">czas przygotowania</p>
    <p class="card-text">składniki</p>
    </div>
    <div class="col-md-4">
    <p class="card-text">sposób przygotowania</p>
    <p class="card-text">dodaj do książki</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe-component'
}

</script>
<style>
img{
  width: 40px;
  height: 40px;
}
.recipe{
  background: burlywood;
position: relative;
z-index: -1;
display: flex;
}
</style>

