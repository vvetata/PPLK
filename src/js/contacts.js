
let cityCollection = document.querySelectorAll('.contacts__city');
let city = Array.from(cityCollection);
let contactsCards = document.querySelector('.contacts__cards');
let contactsCard = document.querySelector('.contacts__card');

let indIndex = 0;

city.forEach((c, index) => {
    c.addEventListener('click', () => {
        contactsCards.scrollLeft = contactsCard.clientWidth * index;
        indIndex = index;
        thisCard(indIndex);
    })
    })
    let thisCard = (index) => {
        for (let c of city) {
            c.classList.remove('vacancy__active');
        }
        city[index].classList.add('vacancy__active');
    }