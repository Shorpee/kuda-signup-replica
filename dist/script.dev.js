"use strict";

var password = document.querySelector('password'); // const togglePassword = document.querySelector('toggle-word')
// const showPassword = document.querySelector('feather-eye-off');
// const hidePassword = document.querySelector('feather-eye');
// togglePassword.addEventListener('click', (e) => {
//     const type = password.getAttribute('type') === 'password'? 'text' : 'password';
//     password.setAttribute('type', type);
//     e.preventDefault();
//     showPassword.toggle();
//     hidePassword.toggle();
// })

$('.toggle-password').click(function () {
  var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  $('#feather-eye-off').toggle();
  $('#feather-eye').toggle();
}); //function to toggle password visibility
// showPassword.addEventListener('click', function(e){
//     // const type = Password.getAttribute('type')
//     if (type === 'password'){
//         Password.setAttribute('text');
//         showPassword.classList.add('hide');
//         hidePassword.classList.add('show');
//     } else {
//         Password.setAttribute('password');
//         showPassword.classList.add('show');
//         hidePassword.classList.add('hide');
//     }
// });
// hidePassword.addEventListener('click', function(e){
//     if (type === 'text'){
//         Password.setAttribute('password');
//         showPassword.classList.add('show');
//         hidePassword.classList.add('hide');
//     } else {
//         Password.setAttribute('text');
//         showPassword.classList.add('hide');
//         hidePassword.classList.add('show');
//     }
// });