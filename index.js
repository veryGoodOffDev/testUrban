const burgerMenu = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const headerPanel = document.querySelector('.header__panel')
const overley = document.querySelector('.overley')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    headerMenu.classList.toggle('show')
    headerPanel.classList.toggle('show')
    overley.classList.toggle('show')
})