const email= document.querySelector('#Email');
const pass = document.querySelector('#user-pin');
const button = document.querySelector('#LoginBtn');
const na = document.querySelector('#username');

button.addEventListener('click',()=>{
    if(na.value==''){
        alert('Enter UserName')
        return
    }
    if(email.value==''){
        alert('Email field is empty')
        return
    }
    if(pass.value==''){
        alert('Enter password')
        return
    }
})
