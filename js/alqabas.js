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

buttons_add = document.querySelectorAll(
  ".book-info .add-to-cart .quntity button.plus"
);
buttons_min = document.querySelectorAll(
  ".book-info .add-to-cart .quntity button.mins"
);

if (/single-book/.test(window.location.href)) {
  buttons_add.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.target.nextElementSibling.value++;
    };
  });
  buttons_min.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      if (e.target.previousElementSibling.value == 1) {
        e.target.previousElementSibling.value = 1;
      } else {
        e.target.previousElementSibling.value--;
      }
    };
  });
}
