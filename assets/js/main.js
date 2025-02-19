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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


const ClassicBtn = document.getElementById('classicPageBtn');
const MinimalistBtn = document.getElementById('minimalistPageBtn');

if(ClassicBtn){
    ClassicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://jen-ignacio.github.io/jignaciodev/index.html';
    })
}

if(MinimalistBtn){
    MinimalistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://jen-ignacio.github.io/jignaciodev/minimalist.html';
    })
}

const hamburger = document.querySelector('.navbar-burger');
const navMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
})