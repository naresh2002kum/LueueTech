const email= document.querySelector('#username');
const pass = document.querySelector('#user-pin');
const button = document.querySelector('#LoginBtn');

button.addEventListener('click',()=>{
    if(email.value==''){
        alert('Username field is empty')
        return
    }
    if(pass.value==''){
        alert('Enter password')
        return
    }
})
