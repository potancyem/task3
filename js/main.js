$(function () {
  $('.top-slider').slick({
    dots: true,


    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev arrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      },
      {

      }

    ]
  });
});

$(function () {
  $('.bot-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      },
      {

      }

    ]
  });
});


