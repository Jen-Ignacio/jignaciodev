import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.48.1/+esm';
const supabaseUrl = 'https://wifwcngturrdtjcxdypz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZndjbmd0dXJyZHRqY3hkeXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NDgxNzAsImV4cCI6MjA1NTMyNDE3MH0.kZHOmHYYv0eEu2e292cAHwMTXVDEyZLTxF2yND4LKVg';
const supabase = createClient(supabaseUrl, supabaseKey);

let name = "";
let email = "";
let message = "";

const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactMessage = document.getElementById('contactMessage');

contactName.addEventListener('change', () => {
    name = contactName.value;
})

contactEmail.addEventListener('change', () => {
    email = contactEmail.value;
})

contactMessage.addEventListener('change', () => {
    message = contactMessage.value;
})

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return regex.test(email); 
  
  }

const submitContact = async() => {
    if(
        !name ||
        !email ||
        !message
    ){
        alert('Please fill out the form properly')
        return;
    }

    if(!validateEmail(email)){
        alert('Check the email address')
    }

    const { data, error } = await supabase
    .from('contactform')
    .insert({
        name,
        email,
        message
    })
    .single()

    if(error) {
        console.log(`Error submitting form: ${error.message}`)
        errorDiv.innerHTML = error.message;
        form.prepend(errorDiv);
        return;
    }

    window.location.reload();
}

const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', submitContact);