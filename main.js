
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')
const closeButton = mobileMenu.querySelector('.close-button')
const gridItems = document.querySelectorAll('.item')
const popup = document.getElementById('popup')
const popupImage = document.getElementById('popupImage')

document.addEventListener('DOMContentLoaded', function () {
	mobileMenuButton.addEventListener('click', function () {
		mobileMenu.classList.add('translate-x-0')
	})

	closeButton.addEventListener('click', function () {
		mobileMenu.classList.add('-translate-x-full')
		mobileMenu.classList.remove('translate-x-0')
	})
})



gridItems.forEach(item => {
   item.addEventListener("click", () => {
       const imageSrc = item.querySelector('img').src;
       popupImage.src = imageSrc;
       popup.style.display = "flex";
   });
});

popup.addEventListener("click", event => {
   if (event.target === popup) {
       popup.style.display = "none";
   }
});

