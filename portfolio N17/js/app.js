window.addEventListener("DOMContentLoaded", function () {

  // Mobile-menu
  let mobMenu = document.querySelector("#mob-menu");
  let mobNav = document.querySelector("#mob-nav");
  mobMenu.addEventListener("click", function () {
    mobMenu.classList.toggle("mob-menu_active")
    mobNav.classList.toggle("mob-nav_active")
  });

  // Footer Date
  document.querySelector("#data").innerHTML = new Date().getFullYear();

  // Swiper.js
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

});