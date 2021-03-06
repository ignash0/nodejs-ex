import FormSubmit  from "./class/FormSubmit.js";
import getElement  from "./getElement.js";

const formRegistration = new FormSubmit('registration');

formRegistration.testInput();

const registrationButton = getElement('#registrationButton');
registrationButton.addEventListener('click', () => {
    formRegistration.submitJson('/registration', responseModalWindow)
});

function responseModalWindow(response){

    const h1Res = getElement('#response'),
        modalWindowReg = getElement('.modalWindowRegistration'),
        buttonOnModalReg = getElement('#okRegistr'),
        buttonOnModalRegA = getElement('#aRegistr');

    modalWindowReg.classList.add('openModalWindow');
    let text;
    if (response === 'yes') {
        text = ' Вы успешно зарегистрированны! Для дальнейшей работы войдите на сайт под своим именем.';
        buttonOnModalRegA.setAttribute('href', '/')
    } else {
        text = 'Введенный e-mail уже использутся другим пользователем. Пройдите регистрацию еще раз.';
        buttonOnModalReg.addEventListener('click', () => {
            modalWindowReg.classList.remove('openModalWindow');
        })
    }
    
    h1Res.innerText = text;
}
