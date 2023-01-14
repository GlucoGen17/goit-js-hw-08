import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

populateTextarea();

const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(KEY_STORAGE);
  e.currentTarget.reset();
  console.log(form.elements.email.value, form.elements.message.value);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
    console.log(JSON.stringify(formData));
}

function populateTextarea() {
  let formData = localStorage.getItem(KEY_STORAGE);
  if (formData) {
    try {
      formData = JSON.parse(formData);
      Object.entries(formData).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    } catch (error) {
      console.error(
        'Error: invalid saved form state in LocalStorage!' + KEY_STORAGE
      );
      console.error(error);
    }
  }
}
