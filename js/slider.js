var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     1240: {
    //       slidesPerView: 2,
    //       spaceBetween: 40
    //     }
    //   }
    
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }