const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});




// <!-- <script src="home.js"></script>
// <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
// <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> -->
// <!-- <script>

//  const nav = document.querySelector('nav');
//  let prevScrollpos = window.pageYOffset;

//  window.addEventListener('scroll',()=>{
//  let currentScrollPos = window.pageYOffset;

//  if(prevScrollpos < currentScrollPos){
//      nav.classList.add('hide');
//  }else{
//      nav.classList.remove('hide');
//  }

//  prevScrollpos = currentScrollPos;
// }) -->