"use strict";

var Password = document.querySelector('password');
var showPassword = document.querySelector('feather-eye-off');
var hidePassword = document.querySelector('feather-eye');
var type = Password.getAttribute('type'); //function to toggle password visibility

showPassword.addEventListener('click', function (e) {
  if (type === 'password') {
    Password.setAttribute('text');
    showPassword.classList.add('hide');
    hidePassword.classList.add('show');
  } else {
    Password.setAttribute('password');
    showPassword.classList.add('show');
    hidePassword.classList.add('hide');
  }
});
hidePassword.addEventListener('click', function (e) {
  if (type === 'text') {
    Password.setAttribute('password');
    showPassword.classList.add('show');
    hidePassword.classList.add('hide');
  } else {
    Password.setAttribute('text');
    showPassword.classList.add('hide');
    hidePassword.classList.add('show');
  }
});