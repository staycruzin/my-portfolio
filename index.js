let viewportWidth = window.innerWidth;

// Sets the viewportWidth whenever the viewport is resized..
function setViewportWidth() {
     viewportWidth = window.innerWidth;
}

// Adjusts the nav bar based on the viewPort width.
function setNavBar() {
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

// Listens for viewport resize events and adjusts the nav bar and the viewportWidth accordingly.
function viewportResized() {
     window.addEventListener('resize', function () {
          setViewportWidth();
          setNavBar();
     });
}

// Expands the nav when the open menu button is clicked.
function openMenuClicked() {
     $( ".open-button" ).click(function() {
          $( ".nav" ).slideToggle( "slow");
          $( ".open-button" ).hide();
          $( ".close-button" ).show();
     });
}

// Collapses the nav when the close menu button is clicked.
function closeMenuClicked() {
     $( ".close-button" ).click(function() {
          $( ".nav" ).slideToggle( "slow");
          $( ".close-button" ).hide();
          $( ".open-button" ).show();
     });
}

// Collapses the nav when a menu item is clicked.
function navMenuItemClicked() {
     $(".menu-item").click(function() {
          if (viewportWidth <= 1199) {
               $( ".nav" ).slideToggle( "fast");
               $( ".close-button" ).hide();
               $( ".open-button" ).show();
          }
     });
}

// Enables smooth scroll when a nav menu item is clicked.
function smoothScroll() {
     $('a[href*="#"]').on('click', function(e) {
          e.preventDefault()

          $('html, body').animate({
               scrollTop: $($(this).attr('href')).offset().top,
          }, 500, 'linear')
     });
}

// Collapses the Nav when it is open and the user clicks off of it.
function clickedOffNav() {
     $(document).click(function(e) {
          if (viewportWidth <= 1199 && $(".nav").is(':visible')) {
               if ($(e.target).closest(".nav").length === 0 && $(e.target).closest(".menu-button").length === 0) {
                    $( ".nav" ).slideToggle( "slow");
                    $( ".close-button" ).hide();
                    $( ".open-button" ).show();
               }     
          }
     });
}

// Activates the individual functions used to implement the portfolio animations.
function handlePortfolioAnimations() {
     setViewportWidth();
     setNavBar();
     viewportResized();
     openMenuClicked();
     closeMenuClicked();
     navMenuItemClicked();
     smoothScroll();
     clickedOffNav();
}

// Callback function for when the page loads.
$(handlePortfolioAnimations);