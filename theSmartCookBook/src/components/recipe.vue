<template>
<div class="recipe">

     <img class="col-md-3" src="https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/kafelki/public/losos_pieczony_na_ryzu_00.jpg?itok=qlUlw3hf">
  <div class="col-md-9">
    <div class="row">
<p class="col-center-block">Zupa śledziowa</p>
  </div>
<div class="row">
<div class="col-md-3">
<div class="row">
    <p>Kategoria:</p>
     <p>Makarony</p>
</div>
<div class="row">
    <p>Poziom trudności:</p>
     <p>trudny</p>
</div>
<div class="row">
    <p>Czas przygotowania:</p>
     <p>2h</p>
</div>
<div class="row">
 <a href="#homePage"><i class="fa fa-star">Dodaj do książki</i></a>
</div>
</div>

<div class="col-md-3">
    <p>Składniki:</p>
     <p class="ingredients">600 g filetu łososia
1 łyżeczka miodu lub syropu klonowego
2 łyżki sosu sojowego
4 łyżki oliwy extra vergine
4 plasterki cytryny + 2 łyżki soku
200 g ryżu (np. jaśminowego)
100 g pomidorków koktajlowych
kilka listków bazylii lub oregano lub natki pietruszki
przyprawy: 2 łyżeczki mielonej papryki, 1/2 łyżeczki mielonej kurkumy lub curry, 1 łyżeczka suszonego oregano, szczypta płatków chili lub ostrej papryki, sól, pieprz</p>
</div>

<div class="col-md-6">
  <p>Sposób przygotowania:</p>
    <p class="recipe-prepare">
Odciąć skórkę z łososia, pokroić na 4 kawałki. Opłukać, osuszyć i włożyć do miski. Doprawić solą, pieprzem, mieloną papryką i kurkumą (lub curry) oraz suszonym oregano. Dodać miód, sos sojowy, 2 łyżki oliwy oraz 2 łyżki soku z cytryny, wszystko wymieszać.
Ugotować ryż w osolonej wodzie zgodnie z instrukcją na opakowaniu. Odcedzić, następnie wysypać do formy żaroodpornej, wymieszać z 1 łyżką oliwy i rozłożyć po całej powierzchni naczynia.
Na wierzchu położyć filety łososia, obłożyć połówkami pomidorków koktajlowych, posypać chili i listkami bazylii (lub ziół lub natki).
Dodać plasterki cytryny, całość skropić pozostałą oliwąOdciąć skórkę z łososia, pokroić na 4 kawałki. Opłukać, osuszyć i włożyć do miski. Doprawić solą, pieprzem, mieloną papryką i kurkumą (lub curry) oraz suszonym oregano. Dodać miód, sos sojowy, 2 łyżki oliwy oraz 2 łyżki soku z cytryny, wszystko wymieszać.
Ugotować ryż w osolonej wodzie zgodnie z instrukcją na opakowaniu. Odcedzić, następnie wysypać do formy żaroodpornej, wymieszać z 1 łyżką oliwy i rozłożyć po całej powierzchni naczynia.
Na wierzchu położyć filety łososia, obłożyć połówkami pomidorków koktajlowych, posypać chili i listkami bazylii (lub ziół lub natki).
Dodać plasterki cytryny, całość skropić pozostałą oliwą  i wstawić do piekarnika nagrzanego do 200 stopni C. Piec przez 15 minut.
  Odciąć skórkę z łososia, pokroić na 4 kawałki. Opłukać, osuszyć i włożyć do miski. Doprawić solą, pieprzem, mieloną papryką i kurkumą (lub curry) oraz suszonym oregano. Dodać miód, sos sojowy, 2 łyżki oliwy oraz 2 łyżki soku z cytryny, wszystko wymieszać.
Ugotować ryż
    </p>
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
object-fit:fill;
border-radius: 25px;
}
.recipe {
 border-radius: 15px 50px 30px 5px;
  position: relative;
  overflow:hidden;
  z-index: -1;
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
}
.information-about-recipe {
  display: flex;
}
.fa-star.fa{
  color: white;
  font-size: 30px;
}

.recipe-prepare{
  text-align: justify;
}
.ingredients{
text-align: justify;
}
</style>
<style src="./../../dist/static/css/lightTheme.css"></style>
