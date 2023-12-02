
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '@0.75': {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    '@1.90': {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});