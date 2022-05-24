const hamburgerBtn = document.querySelector("button.hamburger");
const closeBtn = document.querySelector("button.close");

function toggleNav() {
  document.querySelector(".header .nav").classList.toggle("open");
}

hamburgerBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);
