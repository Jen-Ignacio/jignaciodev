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