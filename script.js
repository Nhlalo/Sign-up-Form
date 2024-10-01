const passwordConfirmation = document.querySelector('#confirmPassword');
const password = document.querySelector('#password');
function confirmPassword(){

if(password.value !== passwordConfirmation.value){
  passwordConfirmation.style['border-color'] = 'red';
}else{
    passwordConfirmation.style['border-color'] = 'black';
}

}
//This will ensure that the password confirmation process continues with every character entered.
passwordConfirmation.addEventListener('keyup', confirmPassword);


/*This will notify the user that the passwords do not match, when the user has entered the correct password on the password confirmation input but then decides to change the passsword on the password input but not on the password confirmation input*/
function checkPasswordNotChanged(){
  if(passwordConfirmation.value !== ''){
  if(password.value !== passwordConfirmation.value){
    passwordConfirmation.style['border-color'] = 'red';
  }else{
      passwordConfirmation.style['border-color'] = 'black';
  }
}
  
  }

  password.addEventListener('keyup',checkPasswordNotChanged);

