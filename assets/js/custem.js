
 
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


$(".owl-carousel1").owlCarousel({
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
    navText: [
    "<img src='./assets/images/previous.png' class='nav-btn prev-slide'>",
     "<img src='./assets/images/next.png' class='nav-btn prev-slide'>",
    ]
});