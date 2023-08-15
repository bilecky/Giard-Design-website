document.addEventListener("DOMContentLoaded", function () {
   const mobileMenuButton = document.getElementById("mobile-menu-button");
   const mobileMenu = document.getElementById("mobile-menu");
   const closeButton = mobileMenu.querySelector(".close-button");

   mobileMenuButton.addEventListener("click", function () {
     mobileMenu.classList.add("translate-x-0");
   });

   closeButton.addEventListener("click", function () {
     mobileMenu.classList.add("-translate-x-full");
     mobileMenu.classList.remove("translate-x-0");

   });
 });