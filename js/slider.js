var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1424: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });