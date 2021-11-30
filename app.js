// SCROLL HEADER

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= headerHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// CARROUCELS

new Glide(".services-carousel", {
  startAt: 0,
  perView: 3,
  bound: true,
  breakpoints: {
    630: {
      perView: 1,
    },
    920: {
      perView: 2,
    },
  },
}).mount();

new Glide(".testimonials-carousel", {
  startAt: 0,
  perView: 2,
  bound: true,
  gap: 48,
  breakpoints: {
    860: {
      perView: 1,
    },
  },
}).mount();

// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");
const closeBtn = document.getElementById("closeMenuBtn");

menuBtn.addEventListener("click", function () {
  menu.classList.add("open-menu");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("open-menu");
});

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    menu.classList.remove("open-menu");
  });
}
