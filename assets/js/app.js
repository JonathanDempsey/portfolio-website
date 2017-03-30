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

    // $('.project--1').click(function(){
    //   div == 1;
    //
    //   console.log('hi');
    //   $('html,body').stop().animate({
    //     scrollTop: divs.eq(1).offset().top
    //   }, 750);
    //   return false;
    //
    //   div == 1;
    // });
    //
    // $('.project--2').click(function(){
    //   div == 2;
    // });
    // $('.project--3').click(function(){
    //   div == 3;
    // });
    // $('.project--4').click(function(){
    //   div == 4;
    // });
    // $('.project--5').click(function(){
    //   div == 5;
    // });

    // NOTE: Tidy up code to be more efficient later.
    // Change project style based on what project is currently highlighted.
    if(div == 1) {
      $('.project--1__title').addClass('project-title__active');
      $('.project--1__subtitle').css({'margin-left': '0', 'opacity':'1'});
      $('.project--1__description').delay(1000).css({'height': 'auto', 'opacity':'1', 'overflow':'visible'});

      $('.project--2__title').removeClass('project-title__active');
      $('.project--2__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--2__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});
    } else if(div == 2) {
      $('.project--1__title').removeClass('project-title__active');
      $('.project--1__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--1__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});

      $('.project--2__title').addClass('project-title__active');
      $('.project--2__subtitle').css({'margin-left': '0', 'opacity':'1'});
      $('.project--2__description').delay(1000).css({'height': 'auto', 'opacity':'1', 'overflow':'visible'});

      $('.project--3__title').removeClass('project-title__active');
      $('.project--3__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--3__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});
    } else if(div == 3) {
      $('.project--2__title').removeClass('project-title__active');
      $('.project--2__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--2__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});

      $('.project--3__title').addClass('project-title__active');
      $('.project--3__subtitle').css({'margin-left': '0', 'opacity':'1'});
      $('.project--3__description').delay(1000).css({'height': 'auto', 'opacity':'1', 'overflow':'visible'});

      $('.project--4__title').removeClass('project-title__active');
      $('.project--4__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--4__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});
    } else if(div == 4) {
      $('.project--3__title').removeClass('project-title__active');
      $('.project--3__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--3__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});

      $('.project--4__title').addClass('project-title__active');
      $('.project--4__subtitle').css({'margin-left': '0', 'opacity':'1'});
      $('.project--4__description').delay(1000).css({'height': 'auto', 'opacity':'1', 'overflow':'visible'});

      $('.project--5__title').removeClass('project-title__active');
      $('.project--5__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--5__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});
    } else if(div == 5) {
      $('.project--4__title').removeClass('project-title__active');
      $('.project--4__subtitle').css({'margin-left': '-200px', 'opacity':'0'});
      $('.project--4__description').css({'height': '0', 'opacity':'0', 'overflow':'hidden'});

      $('.project--5__title').addClass('project-title__active');
      $('.project--5__subtitle').css({'margin-left': '0', 'opacity':'1'});
      $('.project--5__description').delay(1000).css({'height': 'auto', 'opacity':'1', 'overflow':'visible'});
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
