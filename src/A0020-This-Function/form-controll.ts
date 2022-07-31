import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e) {
  // essa funcao é para o escopo global
  e.preventDefault();
  hideErrorMessages(this);
  checkEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (shouldSentForm(this)) console.log('formulario enviado');
});

function checkEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'This field cannot be empty');
  });
}

function checkEmail(email: HTMLInputElement) {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email Invalid!');
}

function checkPassword(
  password1: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password1.value !== password2.value) {
    showErrorMessage(password1, 'Password dont match!');
    showErrorMessage(password2, 'Password dont match!');
  }
  if (password1.value.length < 3 || password1.value.length > 8) {
    showErrorMessage(
      password1,
      'The password must contain at least 3 to 8 CHARACTER',
    );
    showErrorMessage(
      password2,
      'The password must contain at least 3 to 8 CHARACTER',
    );
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formFields = form
    .querySelectorAll('.show-error-message')
    .forEach((item) => item.classList.remove());
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSentForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}
