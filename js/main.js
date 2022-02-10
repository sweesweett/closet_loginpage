const signinBtn = document.querySelector('.signup')
const signupBtn = document.querySelector('.signin')
const signinEl =document.querySelector('.container .signin')
const signupEl =document.querySelector('.container .signup')
const subSignin =document.querySelector('.wrap .submit-signin')
const subSignup =document.querySelector('.wrap .submit-signup')
signinBtn.addEventListener('click',function(){
  signinBtn.classList.add('show');
  signinEl.classList.remove('show');
  signupBtn.classList.remove('show');
  signupEl.classList.add('show');
  subSignin.classList.remove('show');
  subSignup.classList.add('show');
})

signupBtn.addEventListener('click',function(){
  signupBtn.classList.add('show')
  signupEl.classList.remove('show')
  signinBtn.classList.remove('show')
  signinEl.classList.add('show')
  subSignup.classList.remove('show');
  subSignin.classList.add('show');
})