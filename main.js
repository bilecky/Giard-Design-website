const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')
const closeButton = mobileMenu.querySelector('.close-button')
const gridItems = document.querySelectorAll('.item')
const popup = document.getElementById('popup')
const popupImage = document.getElementById('popupImage')
const expandBtn = document.getElementById('expand-btn')
const gradient = document.getElementById('gradient')




mobileMenuButton.addEventListener('click', () => {
	mobileMenu.classList.add('translate-x-0')
})

closeButton.addEventListener('click', () => {
	mobileMenu.classList.add('-translate-x-full')
	mobileMenu.classList.remove('translate-x-0')
})

expandBtn.addEventListener('click', () => {
	gradient.style.display = 'none'
})

gridItems.forEach(item => {
	item.addEventListener('click', () => {
		const imageSrc = item.querySelector('img').src
		popupImage.src = imageSrc
		popup.style.display = 'flex'
	})
})

popup.addEventListener('click', event => {
	if (event.target === popup) {
		popup.style.display = 'none'
	}
})
