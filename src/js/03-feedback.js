import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const user = {};
const KEY = "feedback-form-state";
refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onInput, 500));
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateText();

function onFormSubmit(e) {
    e.preventDefault();
    console.log(user);
    e.currentTarget.reset();
    localStorage.removeItem(KEY);
};

function onEmailInput(e) {
    user.email = e.target.value;
    console.log("значение поля email:", user.email);
    localStorage.setItem(KEY, JSON.stringify(user))
}

function onTextareaInput(e) {
    user.message = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(user));
    console.log("значение поля message:", user.message);
}

// function onInput(evt) {
//     user[evt.target.name] = evt.target.value;
//     localStorage.setItem(KEY, JSON.stringify(user));
//     console.log(user);
// }

function populateText() {
    const savedObj = (localStorage.getItem(KEY));
    if (savedObj) {
        console.log(savedObj);
        refs.input.value = JSON.parse(savedObj).email;
        refs.textarea.value = JSON.parse(savedObj).message;
        
    }
}