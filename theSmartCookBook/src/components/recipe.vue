<template>
<div class="recipe">
  <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg">
    <h5 class="card-title">nazwa przepisu</h5>
    <p class="card-text">kategoria</p>
    <p class="card-text">poziom trudności</p>
    <p class="card-text">czas przygotowania</p>
    <p class="card-text">składniki</p>
    <p class="card-text">sposób przygotowania</p>
    <p class="card-text">dodaj do książki</p>
  </div>
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


}

.card{

}
</style>

