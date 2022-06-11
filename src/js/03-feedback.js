import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const user = {
    email,
    message,
}
// const dataBase = localStorage.setItem("feedback-form-state", JSON.stringify(user))
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset()
};

function onEmailInput(e) {
    user.email = e.target.value;
    console.log(user.email);
    localStorage.setItem("feedback-form-state", JSON.stringify(user))
}

function onTextareaInput(e) {
    user.message = e.target.value;
    localStorage.setItem("feedback-form-state",user.message)
    console.log(e)
}