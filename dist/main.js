/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_mainBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mainBlock.js */ \"./src/js/mainBlock.js\");\n/* harmony import */ var _js_mainBlock_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_mainBlock_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_vacancy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/vacancy.js */ \"./src/js/vacancy.js\");\n/* harmony import */ var _js_vacancy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_vacancy_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_career_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/career.js */ \"./src/js/career.js\");\n/* harmony import */ var _js_career_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_career_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/products.js */ \"./src/js/products.js\");\n/* harmony import */ var _js_products_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_products_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_contacts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/contacts.js */ \"./src/js/contacts.js\");\n/* harmony import */ var _js_contacts_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_contacts_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pplk/./src/index.js?");

/***/ }),

/***/ "./src/js/career.js":
/*!**************************!*\
  !*** ./src/js/career.js ***!
  \**************************/
/***/ (() => {

eval("let careerCards = document.querySelector('.career__cards');\r\nlet careerCard = document.querySelector('.career__card');\r\nlet btnPrew = document.querySelector('.control__prew');\r\nlet btnNext = document.querySelector('.control__next');\r\n\r\nbtnPrew.onclick = () => {\r\n    careerCards.scrollLeft -= careerCard.clientWidth;\r\n}\r\n\r\nbtnNext.onclick = () => {\r\n    careerCards.scrollLeft += careerCard.clientWidth;\r\n}\n\n//# sourceURL=webpack://pplk/./src/js/career.js?");

/***/ }),

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ (() => {

eval("\r\nlet cityCollection = document.querySelectorAll('.contacts__city');\r\nlet city = Array.from(cityCollection);\r\nlet contactsCards = document.querySelector('.contacts__cards');\r\nlet contactsCard = document.querySelector('.contacts__card');\r\n\r\nlet indIndex = 0;\r\n\r\ncity.forEach((c, index) => {\r\n    c.addEventListener('click', () => {\r\n        contactsCards.scrollLeft = contactsCard.clientWidth * index;\r\n        indIndex = index;\r\n        thisCard(indIndex);\r\n    })\r\n    })\r\n    let thisCard = (index) => {\r\n        for (let c of city) {\r\n            c.classList.remove('vacancy__active');\r\n        }\r\n        city[index].classList.add('vacancy__active');\r\n    }\n\n//# sourceURL=webpack://pplk/./src/js/contacts.js?");

/***/ }),

/***/ "./src/js/mainBlock.js":
/*!*****************************!*\
  !*** ./src/js/mainBlock.js ***!
  \*****************************/
/***/ (() => {

eval("/*let input_text = document.querySelectorAll('input__text');\r\nlet inputText = Array.from(input_text);\r\n\r\ninputText.forEach((input, index) => {\r\n    input.addEventListener('focus', () => {\r\n        inputText.value = '';\r\n    })\r\n})*/\r\n\r\nlet buttonForModalColection  = document.querySelectorAll('.button__red');\r\nlet buttonForModal  = Array.from(buttonForModalColection);\r\nlet mainModal  = document.querySelector('.main__modal');\r\nlet closeBtn = document.querySelector('.close__btn');\r\nlet modalSubmit = document.querySelector('.modal__submit');\r\nlet mainModal2  = document.querySelector('.main__modal2');\r\nlet modal2Btn = document.querySelector('.modal2__btn');\r\nlet header = document.querySelector('.header');\r\n\r\n/*mainButton.onclick = () => {\r\n    mainModal.classList.add('display__block');\r\n}*/\r\ncloseBtn.onclick = () => {\r\n    mainModal.classList.remove('display__block');\r\n}\r\nmodalSubmit.onclick = () => {\r\n    mainModal2.classList.add('display__block');\r\n    mainModal.classList.remove('display__block');\r\n}\r\n\r\nmodal2Btn.onclick = () => {\r\n    mainModal2.classList.remove('display__block');\r\n}\r\n\r\n\r\n\r\n\r\nbuttonForModal.forEach((button, index) => {\r\n    button.addEventListener('click', () => {\r\n        header.scrollIntoView({\r\n            behavior: 'auto'\r\n           });\r\n        mainModal.classList.add('display__block');\r\n    })\r\n    })\n\n//# sourceURL=webpack://pplk/./src/js/mainBlock.js?");

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/***/ (() => {

eval("\r\nlet prewBtn  = document.querySelector('.products__prew');\r\nlet nextBtn  = document.querySelector('.products__next');\r\nlet productItems = document.querySelector('.products__items');\r\nlet productItemCollection = document.querySelectorAll('.products__item');\r\nlet productItem = Array.from(productItemCollection);\r\nlet indicatorsCollection = document.querySelectorAll('.products__indicator');\r\nlet indicators = Array.from(indicatorsCollection);\r\n\r\nlet indIndex = 0;\r\n\r\nnextBtn.onclick = () => {\r\n    productItems.scrollLeft += productItem[0].clientWidth + 20;\r\n    if (indIndex >= indicators.length-1) {\r\n        indIndex = indIndex;\r\n    } else {\r\n        indIndex++;\r\n    }\r\n    thisSlide(indIndex);\r\n}\r\nprewBtn.onclick = () => {\r\n    productItems.scrollLeft -= productItem[0].clientWidth + 20;\r\n    if (indIndex < 1) {\r\n        return;        \r\n    } \r\n    else{\r\n        indIndex--;\r\n    }\r\n    thisSlide(indIndex);\r\n}\r\n\r\nindicators.forEach((ind, index) => {\r\n    ind.addEventListener('click', () => {\r\n        productItems.scrollLeft = (productItem[0].clientWidth + 20) * index;\r\n        indIndex = index;\r\n        thisSlide(indIndex);\r\n    })\r\n    })\r\n\r\nlet thisSlide = (index) => {\r\n    for (let ind of indicators) {\r\n        ind.classList.remove('products__indicators_active');\r\n    }\r\n    for (let pI of productItem) {\r\n        pI.classList.remove('products__item_active');\r\n    }\r\n    indicators[index].classList.add('products__indicators_active');\r\n    productItem[index].classList.add('products__item_active');\r\n}\r\n\n\n//# sourceURL=webpack://pplk/./src/js/products.js?");

/***/ }),

/***/ "./src/js/vacancy.js":
/*!***************************!*\
  !*** ./src/js/vacancy.js ***!
  \***************************/
/***/ (() => {

eval("let professionCardColection = document.querySelectorAll('.profession-vacancy__card');\r\nlet professionCard = Array.from(professionCardColection);\r\nlet moreCollection = document.querySelectorAll('.more');\r\nlet more = Array.from(moreCollection);\r\nlet vacancyBottomCollection = document.querySelectorAll('.profession-vacancy__bottom');\r\nlet vacancyBottom = Array.from(vacancyBottomCollection);\r\nlet adventagesCardCollection = document.querySelectorAll('.advantages__card');\r\nlet adventagesCard = Array.from(adventagesCardCollection);\r\nlet advantagesTextCollections = document.querySelectorAll('.card-advantages__text');\r\nlet advantagesText = Array.from(advantagesTextCollections);\r\n\r\n\r\nprofessionCard.forEach ((card, index) => {\r\n    card.addEventListener('click', () => {\r\n    more[index].classList.toggle('transform');\r\n    vacancyBottom[index].classList.toggle('display__block');\r\n    })\r\n})\r\n\r\nlet cardNavCollection = document.querySelectorAll('.vacancy-devision__card');\r\nlet cardNav = Array.from(cardNavCollection);\r\nlet vacancyProf = document.querySelector('.vacancy__profession');\r\nlet professionSlide = document.querySelector('.profession__slide');\r\nlet indIndex = 0;\r\ncardNav.forEach((card, index) => {\r\n    card.addEventListener('click', () => {\r\n        vacancyProf.scrollLeft = (professionSlide.clientWidth) * index;\r\n        indIndex = index;\r\n        thisSl(indIndex);\r\n    })\r\n    })\r\n    let thisSl = (index) => {\r\n        for (let card of cardNav) {\r\n            card.classList.remove('vacancy__active');\r\n        }\r\n        cardNav[index].classList.add('vacancy__active');\r\n    }\r\n\r\nlet advantages = document.querySelector('.advantages');\r\nlet moreAdvantagesCollection = advantages.querySelectorAll('.more');\r\nlet moreAdvantages = Array.from(moreAdvantagesCollection);\r\n\r\nadventagesCard.forEach ((card, index) => {\r\n    card.addEventListener('click', () => {\r\n    moreAdvantages[index].classList.toggle('transform');\r\n    advantagesText[index].classList.toggle('display__block');\r\n    })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://pplk/./src/js/vacancy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;