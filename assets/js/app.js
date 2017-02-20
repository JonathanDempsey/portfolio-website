// Sticky navbar.
var navbar = $('#navbar-main'),
distance = navbar.offset().top,
$window = $(window);

$window.scroll(function() {
  if ($window.scrollTop() >= distance) {
    navbar.removeClass('navbar--fixed-top').addClass('navbar--fixed-top');
  } else {
    navbar.removeClass('navbar--fixed-top');
  }
});
