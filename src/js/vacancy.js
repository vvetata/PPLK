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

let cardNavCollection = document.querySelectorAll('.vacancy-devision__card');
let cardNav = Array.from(cardNavCollection);
let vacancyProf = document.querySelector('.vacancy__profession');
let professionSlide = document.querySelector('.profession__slide');
let indIndex = 0;
cardNav.forEach((card, index) => {
    card.addEventListener('click', () => {
        vacancyProf.scrollLeft = (professionSlide.clientWidth) * index;
        indIndex = index;
        thisSl(indIndex);
    })
    })
    let thisSl = (index) => {
        for (let card of cardNav) {
            card.classList.remove('vacancy__active');
        }
        cardNav[index].classList.add('vacancy__active');
    }

let advantages = document.querySelector('.advantages');
let moreAdvantagesCollection = advantages.querySelectorAll('.more');
let moreAdvantages = Array.from(moreAdvantagesCollection);

adventagesCard.forEach ((card, index) => {
    card.addEventListener('click', () => {
    moreAdvantages[index].classList.toggle('transform');
    advantagesText[index].classList.toggle('display__block');
    })
})

