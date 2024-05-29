let professionCardColection = document.querySelectorAll('.profession-vacancy__card');
let professionCard = Array.from(professionCardColection);
let moreCollection = document.querySelectorAll('.more');
let more = Array.from(moreCollection);
let vacancyBottomCollection = document.querySelectorAll('.profession-vacancy__bottom');
let vacancyBottom = Array.from(vacancyBottomCollection);
let adventagesCardCollection = document.querySelectorAll('.advantages__card');
let adventagesCard = Array.from(adventagesCardCollection);
let advantagesTextCollections = document.querySelectorAll('.card-advantages__text');
let advantagesText = Array.from(advantagesTextCollections);


professionCard.forEach ((card, index) => {
    card.addEventListener('click', () => {
    more[index].classList.toggle('transform');
    vacancyBottom[index].classList.toggle('display__block');
    })
})

adventagesCard.forEach ((card, index) => {
    card.addEventListener('click', () => {
    more[4 + index].classList.toggle('transform');
    advantagesText[index].classList.toggle('display__block');
    })
})

