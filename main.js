/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* Функция создания карточки */\nfunction createCard(element, removeCard, addLike, openImage) {\n  var cardTemplate = document.querySelector('#card-template').content;\n  var card = cardTemplate.querySelector('.card').cloneNode(true);\n  card.querySelector('.card__image').src = element.link;\n  card.querySelector('.card__title').textContent = element.name;\n  card.querySelector('.card__image').alt = element.name;\n  var likeButton = card.querySelector('.card__like-button');\n  var deleteButton = card.querySelector('.card__delete-button');\n  var cardImage = card.querySelector('.card__image');\n  deleteButton.addEventListener('click', function () {\n    removeCard(card);\n  });\n  likeButton.addEventListener('click', function () {\n    addLike(likeButton);\n  });\n  cardImage.addEventListener('click', function () {\n    openImage(element);\n  });\n  return card;\n}\n/* Функция удаления карточки */\nfunction removeCard(card) {\n  card.remove();\n}\n/* Функция добавления лайка */\nfunction addLike(element) {\n  if (element.classList.contains('card__like-button_is-active')) {\n    element.classList.remove('card__like-button_is-active');\n  } else {\n    element.classList.add('card__like-button_is-active');\n  }\n}\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/components/cards.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.js */ \"./src/components/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n\n\n\n\n\n// DOM узлы\nvar content = document.querySelector('.content');\nvar profileTitle = content.querySelector('.profile__title');\nvar profileDescription = content.querySelector('.profile__description');\nvar places = content.querySelector('.places');\nvar placesList = places.querySelector('.places__list');\nvar profileEditButton = content.querySelector('.profile__edit-button');\nvar profileAddButton = content.querySelector('.profile__add-button');\nvar popupList = document.querySelectorAll('.popup');\nvar popupCloseButtonList = document.querySelectorAll('.popup__close');\nvar profilePopup = document.querySelector('.popup_type_edit');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar newCardFormElement = popupNewCard.querySelector('.popup__form');\nvar profileFormElement = profilePopup.querySelector('.popup__form');\nvar nameInput = profileFormElement.querySelector('.popup__input_type_name');\nvar jobInput = profileFormElement.querySelector('.popup__input_type_description');\nvar inputCardName = document.querySelector('.popup__input_type_card-name');\nvar inputCardUrl = document.querySelector('.popup__input_type_url');\n\n/*Функция открытия попапа картинки*/\nfunction openImage(element) {\n  imagePopup.querySelector('.popup__image').src = element.link;\n  imagePopup.querySelector('.popup__image').alt = element.name;\n  imagePopup.querySelector('.popup__caption').textContent = element.name;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(imagePopup);\n}\n\n/* Обработчики события submit */\nfunction profileFormSubmit(evt) {\n  evt.preventDefault();\n  var nameInputValue = nameInput.value;\n  var jobInputValue = jobInput.value;\n  profileTitle.textContent = nameInputValue;\n  profileDescription.textContent = jobInputValue;\n  evt.target.reset();\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(profilePopup);\n}\nfunction newCardFormSubmit(evt) {\n  evt.preventDefault();\n  var obj = {\n    link: inputCardUrl.value,\n    name: inputCardName.value\n  };\n  placesList.prepend((0,_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(obj, _card_js__WEBPACK_IMPORTED_MODULE_2__.removeCard, _card_js__WEBPACK_IMPORTED_MODULE_2__.addLike, openImage));\n  console.log(_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupNewCard);\n  evt.target.reset();\n}\n\n/* Открытие попапов */\nprofileEditButton.addEventListener('click', function () {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileDescription.textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(profilePopup);\n});\nprofileAddButton.addEventListener('click', function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupNewCard);\n  newCardFormElement.reset();\n});\n\n/* Закрытие попапов */\npopupCloseButtonList.forEach(function (el) {\n  el.addEventListener('click', function () {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(el.closest('.popup'));\n  });\n});\n\n/* Закрытие попапов по overlay */\npopupList.forEach(function (el) {\n  el.addEventListener('click', function (overlay) {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeOverlay)(overlay);\n  });\n});\n\n/* Плавное открытие попапов */\npopupList.forEach(function (el) {\n  el.classList.add(\"popup_is-animated\");\n});\n\n/* Прикрепляем обработчик к форме:\r\nон будет следить за событием “submit” - «отправка» */\nprofilePopup.addEventListener('submit', profileFormSubmit);\npopupNewCard.addEventListener('submit', newCardFormSubmit);\n\n/* Вывести карточки на страницу */\n_cards__WEBPACK_IMPORTED_MODULE_0__.initialCards.forEach(function (element) {\n  placesList.append((0,_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(element, _card_js__WEBPACK_IMPORTED_MODULE_2__.removeCard, _card_js__WEBPACK_IMPORTED_MODULE_2__.addLike, openImage));\n});\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/index.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeOverlay: () => (/* binding */ closeOverlay),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(element) {\n  element.classList.add(\"popup_is-opened\");\n  document.addEventListener(\"keydown\", closeEsc);\n}\nfunction closeModal(element) {\n  element.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keydown\", closeEsc);\n}\n;\nfunction closeEsc(evt) {\n  if (evt.key === \"Escape\") {\n    var currentPopup = document.querySelector(\".popup_is-opened\");\n    closeModal(currentPopup);\n  }\n}\n;\nfunction closeOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.currentTarget);\n  }\n}\n;\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/modal.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/pages/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;