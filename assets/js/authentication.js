import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.48.1/+esm';
const supabaseUrl = 'https://wifwcngturrdtjcxdypz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZndjbmd0dXJyZHRqY3hkeXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NDgxNzAsImV4cCI6MjA1NTMyNDE3MH0.kZHOmHYYv0eEu2e292cAHwMTXVDEyZLTxF2yND4LKVg';
const supabase = createClient(supabaseUrl, supabaseKey);

let orderForm = {
    "name":"",
    "email":"",
    "experience":"",
    "package":"",
    "addons":[],
    "attachments": {},
    "readAIPolicy": false,
    "readNDAPolicy": false
};


const name = document.getElementById('name');
const email = document.getElementById('email');
const experience = document.getElementById('experience');
const expPackage = document.getElementById('package');

let addons = document.querySelectorAll('input[name=addons]');

const fileupload = document.getElementById('fileuploadInput');
const aiPolicyCheckInput = document.getElementById('aiPolicyCheckInput');
const ndaPolicyCheckInput = document.getElementById('ndaPolicyCheckInput');

name.addEventListener('change', () => {
    orderForm.name = name.value;
})
email.addEventListener('change', () => {
    orderForm.email = email.value;
})

experience.addEventListener('change', () => {
    orderForm.experience = experience.value;
})

expPackage.addEventListener('change', () => {
    orderForm.package = expPackage.value;
})

addons.forEach(addon => {
    addon.addEventListener('change', () => {
        orderForm.addons = 
            Array.from(addons)
            .filter(i => i.checked)
            .map(i => i.value)
    })
})


fileupload.addEventListener('change', (e) => {
    const allfiles = fileupload.files;
    console.log(allfiles);
});

aiPolicyCheckInput.addEventListener('change', () => {
    aiPolicyCheckInput.checked ?  orderForm.readAIPolicy = true : orderForm.readAIPolicy = false;
})

ndaPolicyCheckInput.addEventListener('change', () => {
    ndaPolicyCheckInput.checked ?  orderForm.readNDAPolicy = true : orderForm.readNDAPolicy = false;
})


const fetchData = async() => {
    const { data, error } = await supabase
    .from('orderform')
    .select('*')

    if(error){
        console.log(`Error: ${error.messasge}`)
    }
}

fetchData();



