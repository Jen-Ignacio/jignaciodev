const experience = document.getElementById('experience');
const package = document.getElementById('package');

const addonForm = document.getElementById('addonForm');
const addonLandingPage = document.getElementById('addonLandingPage');
const addonAuthentication = document.getElementById('addonAuthentication');

const aiBtn = document.getElementById('aiPolicyBtn');
aiBtn.addEventListener('click', (e) => {
    e.preventDefault();
})


const formCheckInput = document.querySelectorAll('.form-check-input');

let experienceSelected;
let packageSelected;

experience.addEventListener('click', (e) => {
    experienceSelected = e.currentTarget.value;
})

package.addEventListener('click', (e) => {
    packageSelected = e.currentTarget.value;
})

if(packageSelected === 'form'){
    addonForm.disabled = true;
}
