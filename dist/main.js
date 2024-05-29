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

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"css/main.min.css\");\n\n//# sourceURL=webpack://pplk/./src/sass/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_mainBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mainBlock.js */ \"./src/js/mainBlock.js\");\n/* harmony import */ var _js_mainBlock_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mainBlock_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_vacancy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/vacancy.js */ \"./src/js/vacancy.js\");\n/* harmony import */ var _js_vacancy_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_vacancy_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_career_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/career.js */ \"./src/js/career.js\");\n/* harmony import */ var _js_career_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_career_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_products_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/products.js */ \"./src/js/products.js\");\n/* harmony import */ var _js_products_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_products_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pplk/./src/index.js?");

/***/ }),

/***/ "./src/js/career.js":
/*!**************************!*\
  !*** ./src/js/career.js ***!
  \**************************/
/***/ (() => {

eval("let careerCards = document.querySelector('.career__cards');\r\nlet careerCard = document.querySelector('.career__card');\r\nlet btnPrew = document.querySelector('.control__prew');\r\nlet btnNext = document.querySelector('.control__next');\r\n\r\nbtnPrew.onclick = () => {\r\n    careerCards.scrollLeft -= careerCard.clientWidth;\r\n}\r\n\r\nbtnNext.onclick = () => {\r\n    careerCards.scrollLeft += careerCard.clientWidth;\r\n}\n\n//# sourceURL=webpack://pplk/./src/js/career.js?");

/***/ }),

/***/ "./src/js/mainBlock.js":
/*!*****************************!*\
  !*** ./src/js/mainBlock.js ***!
  \*****************************/
/***/ (() => {

eval("/*let input_text = document.querySelectorAll('input__text');\r\nlet inputText = Array.from(input_text);\r\n\r\ninputText.forEach((input, index) => {\r\n    input.addEventListener('focus', () => {\r\n        inputText.value = '';\r\n    })\r\n})*/\r\n\r\nlet mainButton  = document.querySelector('.main__button');\r\nlet mainModal  = document.querySelector('.main__modal');\r\nlet closeBtn = document.querySelector('.close__btn');\r\nlet modalSubmit = document.querySelector('.modal__submit');\r\nlet mainModal2  = document.querySelector('.main__modal2');\r\nlet modal2Btn = document.querySelector('.modal2__btn');\r\n\r\nmainButton.onclick = () => {\r\n    mainModal.classList.add('display__block');\r\n}\r\ncloseBtn.onclick = () => {\r\n    mainModal.classList.remove('display__block');\r\n}\r\nmodalSubmit.onclick = () => {\r\n    mainModal2.classList.add('display__block');\r\n    mainModal.classList.remove('display__block');\r\n}\r\n\r\nmodal2Btn.onclick = () => {\r\n    mainModal2.classList.remove('display__block');\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pplk/./src/js/mainBlock.js?");

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/***/ (() => {

eval("\r\nlet prewBtn  = document.querySelector('.products__prew');\r\nlet nextBtn  = document.querySelector('.products__next');\r\nlet productItems = document.querySelector('.products__items');\r\nlet productItemCollection = document.querySelectorAll('.products__item');\r\nlet productItem = Array.from(productItemCollection);\r\nlet indicatorsCollection = document.querySelectorAll('.products__indicator');\r\nlet indicators = Array.from(indicatorsCollection);\r\n\r\nlet indIndex = 0;\r\n\r\n\r\n\r\nnextBtn.onclick = () => {\r\n    productItems.scrollLeft += productItem[0].clientWidth + 20;\r\n    if (indIndex >= indicators.length-1) {\r\n        indIndex = indIndex;\r\n    } else {\r\n        indIndex++;\r\n    }\r\n    thisSlide(indIndex);\r\n}\r\nprewBtn.onclick = () => {\r\n    productItems.scrollLeft -= productItem[0].clientWidth + 20;\r\n    if (indIndex < 1) {\r\n        return;        \r\n    } \r\n    else{\r\n        indIndex--;\r\n    }\r\n    thisSlide(indIndex);\r\n}\r\n\r\nindicators.forEach((ind, index) => {\r\n    ind.addEventListener('click', () => {\r\n        productItems.scrollLeft = (productItem[0].clientWidth + 20) * index;\r\n        indIndex = index;\r\n        thisSlide(indIndex);\r\n    })\r\n    })\r\n\r\nlet thisSlide = (index) => {\r\n    for (let ind of indicators) {\r\n        ind.classList.remove('products__indicators_active');\r\n    }\r\n    for (let pI of productItem) {\r\n        pI.classList.remove('products__item_active');\r\n    }\r\n    indicators[index].classList.add('products__indicators_active');\r\n    productItem[index].classList.add('products__item_active');\r\n}\r\n\n\n//# sourceURL=webpack://pplk/./src/js/products.js?");

/***/ }),

/***/ "./src/js/vacancy.js":
/*!***************************!*\
  !*** ./src/js/vacancy.js ***!
  \***************************/
/***/ (() => {

eval("let professionCardColection = document.querySelectorAll('.profession-vacancy__card');\r\nlet professionCard = Array.from(professionCardColection);\r\nlet moreCollection = document.querySelectorAll('.more');\r\nlet more = Array.from(moreCollection);\r\nlet vacancyBottomCollection = document.querySelectorAll('.profession-vacancy__bottom');\r\nlet vacancyBottom = Array.from(vacancyBottomCollection);\r\nlet adventagesCardCollection = document.querySelectorAll('.advantages__card');\r\nlet adventagesCard = Array.from(adventagesCardCollection);\r\nlet advantagesTextCollections = document.querySelectorAll('.card-advantages__text');\r\nlet advantagesText = Array.from(advantagesTextCollections);\r\n\r\n\r\nprofessionCard.forEach ((card, index) => {\r\n    card.addEventListener('click', () => {\r\n    more[index].classList.toggle('transform');\r\n    vacancyBottom[index].classList.toggle('display__block');\r\n    })\r\n})\r\n\r\nadventagesCard.forEach ((card, index) => {\r\n    card.addEventListener('click', () => {\r\n    more[4 + index].classList.toggle('transform');\r\n    advantagesText[index].classList.toggle('display__block');\r\n    })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://pplk/./src/js/vacancy.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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