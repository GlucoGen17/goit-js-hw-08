import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {};
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(KEY_STORAGE);
  e.currentTarget.reset();
}

function onFormInput(e) {
formData[e.target.name] = e.target.value;
localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function populateTextarea() {
    let formData = localStorage.getItem(KEY_STORAGE);
    if (formData !== null) {
        try {
            formData = JSON.parse(formData);
            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;
        }
        catch (error) {
            console.error(
                'Error: invalid saved form state in LocalStorage!' + KEY_STORAGE
            );
            console.error(error);
        }
    }
