const passwordConfirmation = document.querySelector('#confirmPassword');
function confirmPassword(){
const password = document.querySelector('#password');
if(password.value !== ''){
if(password.value !== passwordConfirmation.value){
  passwordConfirmation.style['border-color'] = 'red';
}else{
    passwordConfirmation.style['border-color'] = 'black';
}
}
}
//This will ensure that the password confirmation process continues with every character entered.
passwordConfirmation.addEventListener('keyup', confirmPassword)

