let careerCards = document.querySelector('.career__cards');
let careerCard = document.querySelector('.career__card');
let btnPrew = document.querySelector('.control__prew');
let btnNext = document.querySelector('.control__next');

btnPrew.onclick = () => {
    careerCards.scrollLeft -= careerCard.clientWidth;
}

btnNext.onclick = () => {
    careerCards.scrollLeft += careerCard.clientWidth;
}