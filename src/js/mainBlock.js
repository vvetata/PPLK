/*let input_text = document.querySelectorAll('input__text');
let inputText = Array.from(input_text);

inputText.forEach((input, index) => {
    input.addEventListener('focus', () => {
        inputText.value = '';
    })
})*/

let mainButton  = document.querySelector('.main__button');
let mainModal  = document.querySelector('.main__modal');
let closeBtn = document.querySelector('.close__btn');
let modalSubmit = document.querySelector('.modal__submit');
let mainModal2  = document.querySelector('.main__modal2');
let modal2Btn = document.querySelector('.modal2__btn');

mainButton.onclick = () => {
    mainModal.classList.add('display__block');
}
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




