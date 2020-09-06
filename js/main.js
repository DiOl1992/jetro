$(function () {

  $('.slider__inner').slick({
    asNavFor: '.slider__thumbs',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt=""></button>'
  });

  $('.slider__thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 5,
          centerMode: true,
        }
      },
      {
        breakpoint: 823,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
    ]
  }); 

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });

});