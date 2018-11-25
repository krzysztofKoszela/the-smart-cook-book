<template>
<div class="recipe">

     <img class="col-md-3" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg">
  <div class="col-md-9">
    <div class="row">
       <div class="col-md-9">
<h5>Zupa śledziowa</h5>
       </div>
        <div class="col-md-3">
    <p>Dodaj do książki</p>
    <i class="fa fa-star"></i>
        </div>
  </div>
<div class="row">
<div class="col-md-3">

    <p>Kategoria:</p>
     <p>zupy</p>
    <p>Poziom trudności:</p>
     <p>trudny</p>
    <p>Czas przygotowania:</p>
     <p>2h</p>
</div>

<div class="col-md-3">
    <p>Składniki:</p>
     <p>lista</p>
</div>

<div class="col-md-6">
    <p class="recipe-prepare">sposób przygotowania Lristique nec lectus. Sed lacinia ex at erat dignissim, vitae dictum dolor porta. Nulla elementum neque nulla, lobortis bibendum felis sodales interdum. Maecenas in dictum leo. Donec ligula ante, elementum sed bibendum non, eleifend sed justo. Vestibulum sed tortor purus. Fusce consectetur sapien eu lorem consequat convallis. Etiam facilisis condimentum tristique. Integer neque orci, tincidunt nec tellus ac, convallis porttitor diam. Quisque euismod nulla sem, pellentesque molestie elit facilisis nec. Nullam dapibus bibendum magna, sit amet tempor ipsum accumsan sed. Curabitur vestibulum ullamcorper posuere. Aliquam rhoncus, neque sit amet ornare feugiat, nunc arcu maximus justo, feugiat cursus justo nisl ut libero.</p>

</div>
</div>

  </div>
   </div>
</template>

<script>
export default {
  name: "recipe-component"
};
</script>
<style>
img {
  object-fit: fill;
}
.recipe {
  background: burlywood;
  position: relative;
  z-index: -1;
  display: flex;
  height: 400px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.information-about-recipe {
  display: flex;
}
.recipe-prepare {

}
.fa-star.fa{
  color: white;
  font-size: 50px;
}
</style>

