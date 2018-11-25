<template>
<div class="recipe">

     <img class="col-md-4" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg">
  <div class="col-md-8">
   <h5 >nazwa przepisu</h5>
   <div class="row">
    <div class="col-md-4">

    <p>kategoria</p>
    <p>poziom trudności</p>
    <p>czas przygotowania</p>
    <p>składniki</p>
    </div>
    <div class="col-md-4">
    <p class="recipe-prepare">sposób przygotowania Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh leo, consequat id velit ac, facilisis iaculis nunc. Morbi at molestie odio. Integer mollis nisi ligula, sed egestas diam malesuada id. Cras id tellus hendrerit, tristique metus vel, iaculis nisl. Sed ac arcu eget purus vulputate pretium. Pellentesque lobortis non quam in volutpat. Ut gravida felis mauris, in facilisis ante sodales ultrices. Fusce malesuada placerat malesuada. Maecenas maximus purus lorem, et congue neque molestie eget.

Aenean ut justo at tellus auctor maximus luctus ac augue. Nullam vel lobortis magna. Mauris eget arcu tincidunt nulla vulputate sagittis. Nullam rhoncus urna arcu. Pellentesque fermentum rhoncus odio, eget interdum dui vehicula sit amet. Maecenas ac eros dolor. Quisque hendrerit aliquet nulla in tristique. Sed in arcu eu sem suscipit rutrum quis a elit. Fusce quis aliquam nisi, accumsan cursus neque. Fusce libero risus, dignissim vel condimentum in, porttitor a libero.

Sed aliquam interdum ipsum, quis porta libero malesuada vitae. Vestibulum eget ante nibh. Maecenas ac luctus leo. Pellentesque auctor sit amet risus in molestie. In purus risus, tempor sed pulvinar in, pharetra at lectus. Duis pulvinar viverra justo, venenatis convallis purus egestas in. Pellentesque et felis vitae elit facilisis congue id eu ex. Sed at tempus erat. Vestibulum ex purus, laoreet non orci quis, auctor facilisis felis. Fusce tortor augue, porta sit amet aliquet eget, pretium ac dui.

Phasellus purus metus, dignissim at semper eget, tristique nec lectus. Sed lacinia ex at erat dignissim, vitae dictum dolor porta. Nulla elementum neque nulla, lobortis bibendum felis sodales interdum. Maecenas in dictum leo. Donec ligula ante, elementum sed bibendum non, eleifend sed justo. Vestibulum sed tortor purus. Fusce consectetur sapien eu lorem consequat convallis. Etiam facilisis condimentum tristique. Integer neque orci, tincidunt nec tellus ac, convallis porttitor diam. Quisque euismod nulla sem, pellentesque molestie elit facilisis nec. Nullam dapibus bibendum magna, sit amet tempor ipsum accumsan sed. Curabitur vestibulum ullamcorper posuere. Aliquam rhoncus, neque sit amet ornare feugiat, nunc arcu maximus justo, feugiat cursus justo nisl ut libero.</p>
    <p>dodaj do książki</p>
  </div>
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
  object-fit: fill;

}
.recipe{
  background: burlywood;
position: relative;
z-index: -1;
display: flex;
  height: 400px;
}
.information-about-recipe{
  display: flex;
}
.recipe-prepare{
 overflow-y: auto;
  height: 100px;

}
</style>

