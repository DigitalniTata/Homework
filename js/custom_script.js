$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $(".demo").champ();
});

jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 1000,
    time: 4000
});
});

$(document).ready(function() {
    $(".fancybox").fancybox();
  });

$('[data-fancybox="gallery"]').fancybox({
	loop: true,
  buttons: [
    "zoom",
    "slideShow",
    "close"
  ],
});
