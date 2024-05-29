/*let input_text = document.querySelectorAll('input__text');
let inputText = Array.from(input_text);

inputText.forEach((input, index) => {
    input.addEventListener('focus', () => {
        inputText.value = '';
    })
})*/

let buttonForModalColection  = document.querySelectorAll('.button__red');
let buttonForModal  = Array.from(buttonForModalColection);
let mainModal  = document.querySelector('.main__modal');
let closeBtn = document.querySelector('.close__btn');
let modalSubmit = document.querySelector('.modal__submit');
let mainModal2  = document.querySelector('.main__modal2');
let modal2Btn = document.querySelector('.modal2__btn');
let header = document.querySelector('.header');

/*mainButton.onclick = () => {
    mainModal.classList.add('display__block');
}*/
closeBtn.onclick = () => {
    mainModal.classList.remove('display__block');
}
modalSubmit.onclick = () => {
    mainModal2.classList.add('display__block');
    mainModal.classList.remove('display__block');
}

modal2Btn.onclick = () => {
    mainModal2.classList.remove('display__block');
}




buttonForModal.forEach((button, index) => {
    button.addEventListener('click', () => {
        header.scrollIntoView({
            behavior: 'auto'
           });
        mainModal.classList.add('display__block');
    })
    })