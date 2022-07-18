const hamburgerBtn = document.querySelector("button.hamburger");
const closeBtn = document.querySelector("button.close");

function toggleNav() {
  document.querySelector(".header .nav").classList.toggle("open");
}

hamburgerBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);

const prevBtn = document.querySelector(".control-button--prev");
const nextBtn = document.querySelector(".control-button--next");

const hero = document.querySelector(".hero-image");

let slide = 0;

const heroImages = [
  "url(../images/mobile-image-hero-1.jpg)",
  "url(../images/mobile-image-hero-2.jpg)",
  "url(../images/mobile-image-hero-3.jpg)"
];

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
  slide--;

  if (slide < 0) {
    slide = heroImages.length - 1;
  }

  setBackground();
}

function nextSlide() {
  slide++;

  if (slide > heroImages.length - 1) {
    slide = 0;
  }

  setBackground();
}

function setBackground() {
  hero.style.backgroundImage = heroImages[slide];
}
