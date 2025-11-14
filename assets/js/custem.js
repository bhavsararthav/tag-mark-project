
 
  $(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 86){
      $("#banner").addClass("shrink");
    }
    else
    {
      $("#banner").removeClass("shrink");
    }
  });
 
$(".recr-content").click(function () {
  $(".recr-content").removeClass("active");
  $(this).addClass("active");
});

$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
      navText: [
    '<i class="fa fa-chevron-left"></i>', 
    '<i class="fa fa-chevron-right"></i>'
  ],
    responsive: {
       0: {
       items: 1 // for mobile
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  });

  
});


$("#event-slider").owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
       0: {
       items: 1 // for mobile
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    },
    autoplayHoverPause: true,
});



$("#myslider").owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
       0: {
       items: 1 // for mobile
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    },
    autoplayHoverPause: true,
});




$("#case-studies").owlCarousel({
    items: 2,
    margin: 10,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
    "<img src='./assets/images/previous.png' class='nav-btn prev-slide'>",
     "<img src='./assets/images/next.png' class='nav-btn prev-slide'>",
    ],
    responsive: {
       0: {
       items: 1 // for mobile
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    },
    autoplayHoverPause: true,
});



$(document).ready(function() {
    var owl = $('#mystudy');
    var totalItems = $('#mystudy .item').length;
    var progressBar = $('.progress-bar-fill');

    // 1. Initialize Owl Carousel with custom settings
    owl.owlCarousel({
        loop: false, // Don't loop for a step-bar effect
        margin: 10,
        nav: false, // Disable default navigation
        dots: false, // Disable default dots
        items: 1, // Display one item at a time
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    // Function to calculate and update the progress bar
    function updateProgressBar(event) {
        // Owl Carousel uses a 0-based index
        var currentIndex = event.item.index; 
        
        // Calculate total items including clones if looping, but for step-bar
        // we usually want the total unique items.
        // If loop is false, totalItems should be correct.
        
        var progress = ((currentIndex + 1) / totalItems) * 100;

        progressBar.css('width', progress + '%');
    }

    // 2. Event handler for slide change
    owl.on('initialized.owl.carousel translated.owl.carousel', function(event) {
        updateProgressBar(event);
    });

    // Initialize progress bar on first load
    // owl.trigger('initialized.owl.carousel'); // This is usually triggered automatically

    // 3. Map custom buttons to Owl Carousel navigation
    $('.owl-next-custom').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.owl-prev-custom').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});   