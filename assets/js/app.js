// Sticky navbar and portfolio content.
var navbar = $('#navbar-main'),
    port = $('.portfolio-content'),
    distance = navbar.offset().top,
    $window = $(window);

$window.scroll(function() {
  if ($window.scrollTop() >= distance) {
    navbar.removeClass('navbar--fixed-top').addClass('navbar--fixed-top');
    port.removeClass('portfolio-content--fixed-top').addClass('portfolio-content--fixed-top');
  } else {
    navbar.removeClass('navbar--fixed-top');
    port.removeClass('portfolio-content--fixed-top');
  }
});
