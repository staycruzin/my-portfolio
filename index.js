$(document).ready(function() {
     let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

     let setViewportWidth = function () {
          viewportWidth = window.innerWidth || document.documentElement.clientWidth;
     }

     let setNavBar = function () {
          if (viewportWidth <= 1199) {
               $(".open-button").show();
               $(".close-button").hide();
               $(".nav").hide();
          } else {
               $(".nav").show();
               $(".open-button").hide();
               $(".close-button").hide();
          }
     }

     $( ".open-button" ).click(function() {
                    $( ".nav" ).slideToggle( "slow");
                    $( ".open-button" ).hide();
                    $( ".close-button" ).show();
               });

     $( ".close-button" ).click(function() {
          $( ".nav" ).slideToggle( "slow");
          $( ".close-button" ).hide();
          $( ".open-button" ).show();
     });

     setViewportWidth();
     setNavBar();

     window.addEventListener('resize', function () {
          setViewportWidth();
          setNavBar();
     }, false);

     $(".menu-item").click(function() {
          if (viewportWidth <= 1199) {
               $( ".nav" ).slideToggle( "fast");
               $( ".close-button" ).hide();
               $( ".open-button" ).show();
          }
     });

     $('a[href*="#"]').on('click', function(e) {
          e.preventDefault()

          $('html, body').animate({
               scrollTop: $($(this).attr('href')).offset().top,
          }, 500, 'linear')
     });

     $(document).click(function(e) {
          if (viewportWidth <= 1199 && $(".nav").is(':visible')) {
               if ($(e.target).closest(".nav").length === 0 && $(e.target).closest(".menu-button").length === 0) {
                    $( ".nav" ).slideToggle( "slow");
                    $( ".close-button" ).hide();
                    $( ".open-button" ).show();
               }     
          }
     });
});