import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const massege = document.querySelector('.feedback-form textarea');

let formData = {};
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


