import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.48.1/+esm';
const supabaseUrl = 'https://wifwcngturrdtjcxdypz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZndjbmd0dXJyZHRqY3hkeXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NDgxNzAsImV4cCI6MjA1NTMyNDE3MH0.kZHOmHYYv0eEu2e292cAHwMTXVDEyZLTxF2yND4LKVg';
const supabase = createClient(supabaseUrl, supabaseKey);

let formName = "";
let formEmail = "";
let formExperience = "";
let formExpPackage = "";
let formAddOns = [];
let formAIPolicyCheck = false; 

const form = document.querySelector('.form');
let errorDiv = document.createElement('div');
errorDiv.classList.add('alert', 'alert-danger', 'p-5', 'm-3', 'show')
errorDiv.setAttribute('role', 'alert');


const name = document.getElementById('name');
const email = document.getElementById('email');
const experience = document.getElementById('experience');
const expPackage = document.getElementById('package');

let addons = document.querySelectorAll('input[name=addons]');

const aiPolicyCheckInput = document.getElementById('aiPolicyCheckInput');

const addonForm = document.getElementById('addonForm');
const addonLandingPage = document.getElementById('addonLandingPage');
const addonAuthentication = document.getElementById('addonAuthentication');

name.addEventListener('change', () => {
    formName = name.value;
})

email.addEventListener('change', () => {
    formEmail = email.value;
})

experience.addEventListener('change', () => {
    formExperience = experience.value;
})

expPackage.addEventListener('change', () => {
    
    if(expPackage.value == "form"){
        addonForm.setAttribute("disabled", true);
        addonLandingPage.setAttribute("disabled", true);
        addonAuthentication.setAttribute("disabled", true);
    }

    if(expPackage.value == "landing-page"){
        addonForm.removeAttribute("disabled");
        addonLandingPage.setAttribute("disabled", true);
        addonAuthentication.setAttribute("disabled", true);
    }

    if(expPackage.value == "authentication"){
        addonForm.removeAttribute("disabled");
        addonLandingPage.removeAttribute("disabled");
        addonAuthentication.setAttribute("disabled", true);
    }

    if(expPackage.value == "site"){
        addonForm.removeAttribute("disabled");
        addonLandingPage.removeAttribute("disabled");
        addonAuthentication.removeAttribute("disabled");
    }

    formExpPackage = expPackage.value;
})

addons.forEach(addon => {
    addon.addEventListener('change', () => {
        formAddOns = 
            Array.from(addons)
            .filter(i => i.checked)
            .map(i => i.value)
    })
})

aiPolicyCheckInput.addEventListener('change', () => {
    aiPolicyCheckInput.checked ?  formAIPolicyCheck = true : formAIPolicyCheck = false;
})

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return regex.test(email); 
  
  }

const submitForm = async() => {

    if(
        !formName ||
        !formEmail ||
        !formExperience ||
        !formExpPackage ||
        !formAIPolicyCheck
    ){
        alert("Please make sure all spaces are filled out properly")
        return;
    }

    if(!validateEmail(formEmail)){
        alert('Check the email address')
    }

    try {
        
    } catch (error) {
        
    }

    const { data, error } = await supabase
    .from('orderform')
    .insert([{
        name: formName,
        email: formEmail,
        experience: formExperience,
        package: formExpPackage,
        addons: formAddOns,
        readAIPolicy: formAIPolicyCheck,
    }])
    .single()

    if(error) {
        console.log(`Error submitting form: ${error.message}`)
        errorDiv.innerHTML = error.message;
        form.prepend(errorDiv);
        return;
    }

    window.open(
        "https://calendly.com/jignacio-dev/60-minute-project-meeting",
        "_blank"
    )
}

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', submitForm);