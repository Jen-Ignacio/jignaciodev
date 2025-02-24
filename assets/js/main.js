let now = new Date();
let time = document.querySelector('.time');

if(now.getHours() < 12){
    time.textContent = 'Morning';
}

if(now.getHours() >= 12 && now.getHours() <= 17){
    time.textContent = 'Afternoon';
}

if(now.getHours() > 16){
    time.textContent = 'Evening';
}

let pageBodyElement = document.querySelector('body');
let pageType = pageBodyElement.getAttribute('id');

let html = document.querySelector('html');

if(pageType === 'minimalist'){
    html.style.scrollPaddingTop = '78px';
}

if(pageType === 'classic'){
    html.style.scrollPaddingTop = '76px';
}

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const headerPosition = header.getBoundingClientRect().bottom + window.scrollY;
const offsetPosition = headerPosition - headerHeight;

const hamburger = document.querySelector('.navbar-burger');
const navMenu = document.querySelector('.navbar-menu');
const navbarItem = document.querySelectorAll('.navbar-item');
const navLinks = document.querySelectorAll('.nav-link');

const ClassicBtn = document.getElementById('classicPageBtn');
const MinimalistBtn = document.getElementById('minimalistPageBtn');

if(ClassicBtn){
    ClassicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://jignacio.dev/index.html';
    })
}

if(MinimalistBtn){
    MinimalistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://jignacio.dev/minimalist.html';
    })
}


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