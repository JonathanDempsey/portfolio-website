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

$(document).ready(function () {
  var divs = $('.scroll-point');
  var dir = 'up'; // wheel scroll direction
  var div = 0; // current div

  $(document.body).on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
      dir = 'down';
    } else {
      dir = 'up';
    }
    // find currently visible div :
    div = -1;
    divs.each(function(i){
      if (div < 0 && ($(this).offset().top >= $(window).scrollTop())) {
        div = i;
      }
    });
    if (dir == 'up' && div > 0) {
      div--;
    }
    if (dir == 'down' && div < divs.length) {
      div++;
    }

    console.log(div, dir, divs.length);

    // Rough
    if(div == 1) {
      $('.project-title--1').addClass('project-title__active');
      $('.project-title--2').removeClass('project-title__active');
    } else if(div == 2) {
      $('.project-title--1').removeClass('project-title__active');
      $('.project-title--2').addClass('project-title__active');
      $('.project-title--3').removeClass('project-title__active');
    } else if(div == 3) {
      $('.project-title--2').removeClass('project-title__active');
      $('.project-title--3').addClass('project-title__active');
      $('.project-title--4').removeClass('project-title__active');
    } else if(div == 4) {
      $('.project-title--3').removeClass('project-title__active');
      $('.project-title--4').addClass('project-title__active');
      $('.project-title--5').removeClass('project-title__active');
    } else if(div == 5) {
      $('.project-title--4').removeClass('project-title__active');
      $('.project-title--5').addClass('project-title__active');
    }

    $('html,body').stop().animate({
      scrollTop: divs.eq(div).offset().top
    }, 750);
    return false;
  });

  $(window).resize(function () {
    $('html,body').scrollTop(divs.eq(div).offset().top);
  });
});
