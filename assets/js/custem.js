
 
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