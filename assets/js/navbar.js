const hamburger = document.querySelector('.navbar-burger');
const navMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');

    navbarItem.forEach(e => {
        e.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('is-active');
        })
    })
})