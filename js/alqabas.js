var swiper0 = new Swiper(".swiper0", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination0",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next0",
    prevEl: ".swiper-button-prev0",
  },
});

var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 50,
  autoplay: true,

  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

var swiper1 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 50,
  autoplay: true,

  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
