$(document).ready(function() {
  console.log("project.js running");
  //on scroll, run code
  $(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
      // $(".navbarColor").css("background-color", '#7291d6');
      $("nav").removeClass('white');
      console.log('turn blue');
    }
    else {
      // $(".navbarColor").css("background-color", 'white');
      $("nav").addClass('white');
      
      console.log('turn white');
    }
  })
})




// var Slideshow = function(className) {
//   this.currentSlide = 1;
//   currentSlide = 1;

// showDivs(currentSlide);

// function plusDivs(n) {
//   showDivs(currentSlide += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var x = $(className+" *");
//   console.log(currentSlide);

//   // go to first item if at end
//   if (n > x.length) {
//     currentSlide = 1;
//   // go to last item if at beginning
//   } if (n < 1) {
//     currentSlide = x.length;
//   }
//   // hide all images 
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   // show current image
//   x[currentSlide-1].style.display = "block";
// }
// }

// $(document).ready(function() {


// })