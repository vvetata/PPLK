
let prewBtn  = document.querySelector('.products__prew');
let nextBtn  = document.querySelector('.products__next');
let productItems = document.querySelector('.products__items');
let productItemCollection = document.querySelectorAll('.products__item');
let productItem = Array.from(productItemCollection);
let indicatorsCollection = document.querySelectorAll('.products__indicator');
let indicators = Array.from(indicatorsCollection);

let indIndex = 0;

nextBtn.onclick = () => {
    productItems.scrollLeft += productItem[0].clientWidth + 20;
    if (indIndex >= indicators.length-1) {
        indIndex = indIndex;
    } else {
        indIndex++;
    }
    thisSlide(indIndex);
}
prewBtn.onclick = () => {
    productItems.scrollLeft -= productItem[0].clientWidth + 20;
    if (indIndex < 1) {
        return;        
    } 
    else{
        indIndex--;
    }
    thisSlide(indIndex);
}

indicators.forEach((ind, index) => {
    ind.addEventListener('click', () => {
        productItems.scrollLeft = (productItem[0].clientWidth + 20) * index;
        indIndex = index;
        thisSlide(indIndex);
    })
    })

let thisSlide = (index) => {
    for (let ind of indicators) {
        ind.classList.remove('products__indicators_active');
    }
    for (let pI of productItem) {
        pI.classList.remove('products__item_active');
    }
    indicators[index].classList.add('products__indicators_active');
    productItem[index].classList.add('products__item_active');
}
