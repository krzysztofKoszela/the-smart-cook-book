<template>
<!-- The overlay -->
<div id="myNavv" class="overlay">
<!-- Button to close the overlay navigation -->
  <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
  <!-- Overlay content -->
  <div class="overlay-content">
<h2> Witaj w formularzu wprowadzania nowego przepisu </h2>

    <form class="col-md-6 col-center-block">
      <label for="exampleTextarea">Nazwa dania</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
<label for="exampleTextarea">Składniki</label>
    <search-component class="search-cmpt col-md-12"></search-component>

 <div class="form-group">
    <label for="exampleTextarea">Sposób przygotowania</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>

<h2> Poziom trudności </h2>
<label class="radio-inline"><input type="radio" name="optradio">Łatwy</label>
<label class="radio-inline"><input type="radio" name="optradio">Średni</label>
<label class="radio-inline"><input type="radio" name="optradio">Trudny</label>


<div>
  <label for="example-number-input" class="col-2 col-form-label">Czas przygotowania</label>
</div>
    <input class="form-control col-md-1 col-center-block" type="number" value="10" id="example-number-input">


  <div class="form-group">
    <label for="exampleInputFile">Zdjęcie dania</label>
    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</div>
</template>

<script>
import search from  "./search";

export default {
  name: "new-recipe-component",
   components: {
    "search-component": search
},
  methods: {
    closeNav: function() {
      document.getElementById("myNavv").style.width = "0%";
    }
  }
};
</script>

<style>
/*wysrodkowanie diva*/
.col-center-block {
    float: none;
    display: block;
    margin: 0 auto;
    /* margin-left: auto; margin-right: auto; */
}

.search-cmpt{
  position: relative;
}
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(100, 0, 0); /* Black fallback color */
  background-color: rgba(100, 0, 0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>

