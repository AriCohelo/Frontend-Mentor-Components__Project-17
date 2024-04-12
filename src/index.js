import './main.scss';
let email = document.getElementById('email');
let submitButton = document.querySelector('.card__info-email-button');
let emailForm = document.querySelector('.card__info-email');

let emailError = document.querySelector('.card__info-email-error');

submitButton.addEventListener('click', (e) => {
	if (!email.value) return;
	if (!email.checkValidity()) {
		e.preventDefault();
		emailError.style.display = 'grid';
		emailForm.style.display = 'none';
	}
});
