const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')
const closeButton = mobileMenu.querySelector('.close-button')
const gridItems = document.querySelectorAll('.item')
const popup = document.getElementById('popup')
const popupImage = document.getElementById('popupImage')
const expandBtn = document.getElementById('expand-btn')
const gradient = document.getElementById('gradient')
const searchButton = document.getElementById('searchButton');
const searchContainer = document.getElementById('searchContainer');



searchButton.addEventListener('click', () => {
    searchContainer.style.display = 'block';
    searchButton.style.display = 'none';
});

document.addEventListener('click', (event) => {
   if (!searchContainer.contains(event.target) && !searchButton.contains(event.target)) {
       searchContainer.style.display = 'none';
       searchButton.style.display = 'block';
   }
});



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
