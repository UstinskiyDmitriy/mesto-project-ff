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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLikeCard: () => (/* binding */ addLikeCard),\n/* harmony export */   deleteCardApi: () => (/* binding */ deleteCardApi),\n/* harmony export */   deleteLikeCard: () => (/* binding */ deleteLikeCard),\n/* harmony export */   getCards: () => (/* binding */ getCards),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   patchAvatar: () => (/* binding */ patchAvatar),\n/* harmony export */   patchUser: () => (/* binding */ patchUser),\n/* harmony export */   postCard: () => (/* binding */ postCard)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-16',\n  headers: {\n    authorization: 'e4954371-ca52-48e0-a198-aa3fe92a1835',\n    'Content-Type': 'application/json'\n  }\n};\nvar apiRoutes = {\n  user: \"users/me\",\n  cards: \"cards\",\n  likes: \"likes\"\n};\nfunction checkResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n}\n\n/* Получение всех карточек */\nvar getCards = function getCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.cards), {\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n/* Добавление новой карточки */\nvar postCard = function postCard(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.cards), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(checkResponse);\n};\n\n/* Удаление карточки по идентификатору */\nvar deleteCardApi = function deleteCardApi(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.cards, \"/\").concat(id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(function (res) {\n    checkResponse(res);\n  });\n};\n\n/*Получение информации о пользователе */\nvar getUser = function getUser() {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.user), {\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n/*Обновление информации о пользователе */\nvar patchUser = function patchUser(name, about) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.user), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(checkResponse);\n};\n\n/* Добавление лайка карточке */\nvar addLikeCard = function addLikeCard(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.cards, \"/\").concat(apiRoutes.likes, \"/\").concat(id), {\n    method: \"PUT\",\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n/* Удаление лайка с карточки */\nvar deleteLikeCard = function deleteLikeCard(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.cards, \"/\").concat(apiRoutes.likes, \"/\").concat(id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n/* Обновление аватара пользователя */\nvar patchAvatar = function patchAvatar(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/\").concat(apiRoutes.user, \"/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(checkResponse);\n};\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   handleLikes: () => (/* binding */ handleLikes)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n\n\n/* Создание темплейта карточек */\nfunction createCard(cards, callbacksObject, userId) {\n  var deleteCardCallback = callbacksObject.deleteCardCallback,\n    openImageCallback = callbacksObject.openImageCallback,\n    handleLikesCallback = callbacksObject.handleLikesCallback;\n  var cardTemplate = document.querySelector(\"#card-template\");\n  var cardElement = cardTemplate.content.querySelector(\".places__item\").cloneNode(true);\n  var cardImage = cardElement.querySelector(\".card__image\");\n  var cardTitle = cardElement.querySelector(\".card__title\");\n  var cardLikeButton = cardElement.querySelector(\".card__like-button\");\n  var cardLikeCounter = cardElement.querySelector(\".card__like-counter\");\n  var deleteButton = cardElement.querySelector(\".card__delete-button\");\n  cardImage.src = cards.link;\n  cardImage.alt = cards.name;\n  cardTitle.textContent = cards.name;\n  cardLikeCounter.textContent = cards.likes.length;\n\n  /* Удаление своих карточек */\n  if (userId !== cards.owner._id) {\n    deleteButton.style.display = \"none\";\n  } else {\n    deleteButton.addEventListener(\"click\", function () {\n      var cardId = cards._id;\n      deleteCardCallback(cardElement, cardId);\n    });\n  }\n  /* Проверка наличия лайка */\n  var isLiked = cards.likes.some(function (like) {\n    return like._id === userId;\n  });\n  if (isLiked) {\n    cardLikeButton.classList.add(\"card__like-button_is-active\");\n  }\n  cardLikeButton.addEventListener(\"click\", function () {\n    handleLikesCallback(cardLikeCounter, cardLikeButton, cards);\n  });\n  cardImage.addEventListener(\"click\", function () {\n    openImageCallback(cardImage);\n  });\n  return cardElement;\n}\n\n/* Функция подсчета лайков */\nfunction handleLikes(cardLikeCounter, cardLikeButton, cards) {\n  if (cardLikeButton.classList.contains(\"card__like-button_is-active\")) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.deleteLikeCard)(cards._id).then(function (res) {\n      cardLikeButton.classList.toggle(\"card__like-button_is-active\");\n      cardLikeCounter.textContent = res.likes.length;\n    }).catch(function (err) {\n      console.error(\"Произошла ошибка при удалении лайка:\", err);\n    });\n  } else {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.addLikeCard)(cards._id).then(function (res) {\n      cardLikeButton.classList.toggle(\"card__like-button_is-active\");\n      cardLikeCounter.textContent = res.likes.length;\n    }).catch(function (err) {\n      console.error(\"Произошла ошибка при добавлении лайка:\", err);\n    });\n  }\n}\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/card.js?");

/***/ }),

/***/ "./src/components/const.js":
/*!*********************************!*\
  !*** ./src/components/const.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   avatarForm: () => (/* binding */ avatarForm),\n/* harmony export */   avatarFormElement: () => (/* binding */ avatarFormElement),\n/* harmony export */   avatarImage: () => (/* binding */ avatarImage),\n/* harmony export */   avatarInput: () => (/* binding */ avatarInput),\n/* harmony export */   buttonTypeCard: () => (/* binding */ buttonTypeCard),\n/* harmony export */   deleteCardForm: () => (/* binding */ deleteCardForm),\n/* harmony export */   deletePopup: () => (/* binding */ deletePopup),\n/* harmony export */   editForm: () => (/* binding */ editForm),\n/* harmony export */   editFormElement: () => (/* binding */ editFormElement),\n/* harmony export */   jobInput: () => (/* binding */ jobInput),\n/* harmony export */   nameInput: () => (/* binding */ nameInput),\n/* harmony export */   newCardForm: () => (/* binding */ newCardForm),\n/* harmony export */   newNameInput: () => (/* binding */ newNameInput),\n/* harmony export */   newPlaceFormElement: () => (/* binding */ newPlaceFormElement),\n/* harmony export */   newUrlInput: () => (/* binding */ newUrlInput),\n/* harmony export */   placesList: () => (/* binding */ placesList),\n/* harmony export */   popupImage: () => (/* binding */ popupImage),\n/* harmony export */   popupImageCaption: () => (/* binding */ popupImageCaption),\n/* harmony export */   popupsArray: () => (/* binding */ popupsArray),\n/* harmony export */   profileAddButton: () => (/* binding */ profileAddButton),\n/* harmony export */   profileEditButton: () => (/* binding */ profileEditButton),\n/* harmony export */   userJobElement: () => (/* binding */ userJobElement),\n/* harmony export */   userNameElement: () => (/* binding */ userNameElement),\n/* harmony export */   validationConfig: () => (/* binding */ validationConfig)\n/* harmony export */ });\nvar editFormElement = document.querySelector('.edit-profile');\nvar newPlaceFormElement = document.querySelector('.new-card');\nvar avatarFormElement = document.querySelector('.avatar-form');\nvar avatarForm = document.querySelector('.popup_type_avatar');\nvar avatarImage = document.querySelector('.profile__image');\nvar avatarInput = avatarFormElement.querySelector('.popup__input_type_url');\nvar deleteCardForm = document.querySelector('.delete-card');\nvar buttonTypeCard = document.querySelector('.popup_type_image');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar popupsArray = Array.from(document.querySelectorAll('.popup'));\nvar editForm = document.querySelector('.popup_type_edit');\nvar newCardForm = document.querySelector('.popup_type_new-card');\nvar deletePopup = document.querySelector('.popup_type_delete-card');\nvar placesList = document.querySelector('.places__list');\nvar nameInput = document.querySelector('.popup__input_type_name');\nvar jobInput = document.querySelector('.popup__input_type_description');\nvar userNameElement = document.querySelector('.profile__title');\nvar userJobElement = document.querySelector('.profile__description');\nvar newNameInput = newPlaceFormElement.querySelector('.popup__input_type_card-name');\nvar newUrlInput = newPlaceFormElement.querySelector('.popup__input_type_url');\nvar popupImageCaption = document.querySelector(\".popup__caption\");\nvar popupImage = document.querySelector('.popup__image');\nvar validationConfig = {\n  formSelector: \".popup__form\",\n  inputSelector: \".popup__input\",\n  submitButtonSelector: \".button\",\n  inactiveButtonClass: \"button_inactive\",\n  inputErrorClass: \"form__input_type_error\",\n  errorClass: \"form__input-error_active\"\n};\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/const.js?");

/***/ }),

/***/ "./src/components/forms/avatarForm.js":
/*!********************************************!*\
  !*** ./src/components/forms/avatarForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAvatarFormSubmit: () => (/* binding */ handleAvatarFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ \"./src/components/const.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.js */ \"./src/components/api.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _multiForms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiForms.js */ \"./src/components/forms/multiForms.js\");\n\n\n\n\n\n/* Обработчик отправки формы аватара */\nfunction handleAvatarFormSubmit(event) {\n  function makeRequest() {\n    var avatar = _const_js__WEBPACK_IMPORTED_MODULE_0__.avatarInput.value;\n    return (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.patchAvatar)(avatar).then(function (res) {\n      _const_js__WEBPACK_IMPORTED_MODULE_0__.avatarImage.setAttribute(\"style\", \"background-image: url('\".concat(res.avatar, \"')\"));\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(_const_js__WEBPACK_IMPORTED_MODULE_0__.avatarForm);\n    });\n  }\n  (0,_multiForms_js__WEBPACK_IMPORTED_MODULE_3__.handleSubmit)(makeRequest, event);\n}\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/forms/avatarForm.js?");

/***/ }),

/***/ "./src/components/forms/deleteCardForm.js":
/*!************************************************!*\
  !*** ./src/components/forms/deleteCardForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./src/components/api.js\");\n\n\n/* Удаление карточки */\nfunction deleteCard(selectedCard, id) {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteCardApi)(id).then(function () {\n    selectedCard.remove();\n  }).catch(function (err) {\n    console.error(\"Произошла ошибка при удалении карточки:\", err);\n  });\n}\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/forms/deleteCardForm.js?");

/***/ }),

/***/ "./src/components/forms/editProfileForm.js":
/*!*************************************************!*\
  !*** ./src/components/forms/editProfileForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit),\n/* harmony export */   setInitialEditProfileFormValues: () => (/* binding */ setInitialEditProfileFormValues)\n/* harmony export */ });\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/api.js */ \"./src/components/api.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ \"./src/components/const.js\");\n/* harmony import */ var _multiForms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiForms.js */ \"./src/components/forms/multiForms.js\");\n\n\n\n\n\n/* Установка начальных значений */\nfunction setInitialEditProfileFormValues() {\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.nameInput.value = _const_js__WEBPACK_IMPORTED_MODULE_2__.userNameElement.textContent;\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.jobInput.value = _const_js__WEBPACK_IMPORTED_MODULE_2__.userJobElement.textContent;\n}\n\n/* Обработчик отправки формы */\nfunction handleFormSubmit(evt) {\n  function makeRequest() {\n    var name = _const_js__WEBPACK_IMPORTED_MODULE_2__.nameInput.value;\n    var about = _const_js__WEBPACK_IMPORTED_MODULE_2__.jobInput.value;\n    return (0,_components_api_js__WEBPACK_IMPORTED_MODULE_0__.patchUser)(name, about).then(function (dataUser) {\n      _const_js__WEBPACK_IMPORTED_MODULE_2__.userNameElement.textContent = dataUser.name;\n      _const_js__WEBPACK_IMPORTED_MODULE_2__.userJobElement.textContent = dataUser.about;\n      setInitialEditProfileFormValues();\n      (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(evt.target.closest(\".popup_is-opened\"));\n    });\n  }\n  (0,_multiForms_js__WEBPACK_IMPORTED_MODULE_3__.handleSubmit)(makeRequest, evt);\n}\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/forms/editProfileForm.js?");

/***/ }),

/***/ "./src/components/forms/multiForms.js":
/*!********************************************!*\
  !*** ./src/components/forms/multiForms.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSubmit: () => (/* binding */ handleSubmit)\n/* harmony export */ });\nfunction renderLoading(isLoading, button) {\n  var initialText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"Сохранить\";\n  var loadingText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"Сохранение...\";\n  if (isLoading) {\n    button.textContent = loadingText;\n  } else {\n    button.textContent = initialText;\n  }\n}\nfunction handleSubmit(request, evt) {\n  var loadingText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"Сохранение...\";\n  evt.preventDefault();\n  var submitButton = evt.submitter;\n  var initialText = submitButton.textContent;\n  renderLoading(true, submitButton, initialText, loadingText);\n  request().then(function () {\n    evt.target.reset();\n  }).catch(function (err) {\n    console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err));\n  }).finally(function () {\n    renderLoading(false, submitButton, initialText, loadingText);\n  });\n}\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/forms/multiForms.js?");

/***/ }),

/***/ "./src/components/forms/newCardForm.js":
/*!*********************************************!*\
  !*** ./src/components/forms/newCardForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleNewCardFormSubmit: () => (/* binding */ handleNewCardFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./src/components/api.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card.js */ \"./src/components/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ \"./src/components/const.js\");\n/* harmony import */ var _multiForms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiForms.js */ \"./src/components/forms/multiForms.js\");\n\n\n\n\n\n\n/* Обработчик отправки формы создания карточки */\nfunction handleNewCardFormSubmit(event, callbacksObject, userId) {\n  function makeRequest() {\n    return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postCard)(_const_js__WEBPACK_IMPORTED_MODULE_3__.newNameInput.value, _const_js__WEBPACK_IMPORTED_MODULE_3__.newUrlInput.value).then(function (card) {\n      var newCardElement = (0,_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(card, callbacksObject, userId);\n      _const_js__WEBPACK_IMPORTED_MODULE_3__.placesList.prepend(newCardElement);\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(_const_js__WEBPACK_IMPORTED_MODULE_3__.newCardForm);\n    });\n  }\n  (0,_multiForms_js__WEBPACK_IMPORTED_MODULE_4__.handleSubmit)(makeRequest, event);\n}\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/forms/newCardForm.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ \"./src/components/const.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.js */ \"./src/components/card.js\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _forms_editProfileForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/editProfileForm.js */ \"./src/components/forms/editProfileForm.js\");\n/* harmony import */ var _forms_newCardForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/newCardForm.js */ \"./src/components/forms/newCardForm.js\");\n/* harmony import */ var _forms_deleteCardForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/deleteCardForm.js */ \"./src/components/forms/deleteCardForm.js\");\n/* harmony import */ var _forms_avatarForm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/avatarForm.js */ \"./src/components/forms/avatarForm.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n(0,_validation_js__WEBPACK_IMPORTED_MODULE_5__.enableValidation)(_const_js__WEBPACK_IMPORTED_MODULE_2__.validationConfig);\n\n/* Открытие попапа картинки */\nfunction openImagePopup(cardImg) {\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.popupImage.src = cardImg.src;\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.popupImage.alt = cardImg.alt;\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.popupImageCaption.textContent = cardImg.alt;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_const_js__WEBPACK_IMPORTED_MODULE_2__.buttonTypeCard);\n}\n\n/* Колбэки карточки */\nvar callbacksObject = {\n  deleteCardCallback: _forms_deleteCardForm_js__WEBPACK_IMPORTED_MODULE_8__.deleteCard,\n  openImageCallback: openImagePopup,\n  handleLikesCallback: _card_js__WEBPACK_IMPORTED_MODULE_4__.handleLikes\n};\n\n/* Добавление слушателя кнопке редактирования профиля */\n_const_js__WEBPACK_IMPORTED_MODULE_2__.profileEditButton.addEventListener(\"click\", function () {\n  (0,_validation_js__WEBPACK_IMPORTED_MODULE_5__.clearValidation)(_const_js__WEBPACK_IMPORTED_MODULE_2__.editFormElement, _const_js__WEBPACK_IMPORTED_MODULE_2__.validationConfig);\n  (0,_forms_editProfileForm_js__WEBPACK_IMPORTED_MODULE_6__.setInitialEditProfileFormValues)();\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_const_js__WEBPACK_IMPORTED_MODULE_2__.editForm);\n});\n\n/* Добавление слушателя кнопке создания новой карточки */\n_const_js__WEBPACK_IMPORTED_MODULE_2__.profileAddButton.addEventListener(\"click\", function () {\n  (0,_validation_js__WEBPACK_IMPORTED_MODULE_5__.clearValidation)(_const_js__WEBPACK_IMPORTED_MODULE_2__.newCardForm, _const_js__WEBPACK_IMPORTED_MODULE_2__.validationConfig);\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.newNameInput.value = '';\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.newUrlInput.value = '';\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_const_js__WEBPACK_IMPORTED_MODULE_2__.newCardForm);\n});\n/* Добавление слушателя редактирования аватара*/\n_const_js__WEBPACK_IMPORTED_MODULE_2__.avatarImage.addEventListener(\"click\", function () {\n  (0,_validation_js__WEBPACK_IMPORTED_MODULE_5__.clearValidation)(_const_js__WEBPACK_IMPORTED_MODULE_2__.avatarForm, _const_js__WEBPACK_IMPORTED_MODULE_2__.validationConfig);\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.avatarInput.value = '';\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(_const_js__WEBPACK_IMPORTED_MODULE_2__.avatarForm);\n});\n/* Закрытие попапов */\n_const_js__WEBPACK_IMPORTED_MODULE_2__.popupsArray.forEach(function (popup) {\n  var closeButton = popup.querySelector(\".popup__close\");\n  popup.addEventListener(\"click\", _modal_js__WEBPACK_IMPORTED_MODULE_1__.closeOverlay);\n  closeButton.addEventListener(\"click\", _modal_js__WEBPACK_IMPORTED_MODULE_1__.handleCloseButtonClick);\n});\n\n/* Вывод информации о пользователе */\nvar userId = \"\";\nfunction setUserInfo(user) {\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.userNameElement.textContent = user.name;\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.userJobElement.textContent = user.about;\n  _const_js__WEBPACK_IMPORTED_MODULE_2__.avatarImage.setAttribute(\"style\", \"background-image: url('\".concat(user.avatar, \"')\"));\n  userId = user._id;\n}\n\n/* Добавление карточек на страницу */\nfunction renderCards(cards, callbacksObject, userId) {\n  cards.forEach(function (card) {\n    var cardElement = (0,_card_js__WEBPACK_IMPORTED_MODULE_4__.createCard)(card, callbacksObject, userId);\n    _const_js__WEBPACK_IMPORTED_MODULE_2__.placesList.append(cardElement);\n  });\n}\n_const_js__WEBPACK_IMPORTED_MODULE_2__.editForm.addEventListener(\"submit\", _forms_editProfileForm_js__WEBPACK_IMPORTED_MODULE_6__.handleFormSubmit);\n_const_js__WEBPACK_IMPORTED_MODULE_2__.newCardForm.addEventListener(\"submit\", function (event) {\n  (0,_forms_newCardForm_js__WEBPACK_IMPORTED_MODULE_7__.handleNewCardFormSubmit)(event, callbacksObject, userId);\n});\n_const_js__WEBPACK_IMPORTED_MODULE_2__.avatarForm.addEventListener(\"submit\", _forms_avatarForm_js__WEBPACK_IMPORTED_MODULE_9__.handleAvatarFormSubmit);\nPromise.all([(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getUser)(), (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    user = _ref2[0],\n    cards = _ref2[1];\n  setUserInfo(user);\n  renderCards(cards, callbacksObject, user._id);\n}).catch(function (err) {\n  console.error(\"Произошла ошибка при получении данных:\", err);\n});\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/index.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeOverlay: () => (/* binding */ closeOverlay),\n/* harmony export */   handleCloseButtonClick: () => (/* binding */ handleCloseButtonClick),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(element) {\n  element.classList.add('popup_is-opened');\n  document.addEventListener(\"keydown\", closeEsc);\n}\nfunction closeModal(element) {\n  if (element) {\n    element.classList.remove(\"popup_is-opened\");\n    document.removeEventListener(\"keydown\", closeEsc);\n  }\n}\nfunction closeEsc(evt) {\n  if (evt.key === \"Escape\") {\n    var currentPopup = document.querySelector('.popup_is-opened');\n    closeModal(currentPopup);\n  }\n}\nfunction closeOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.target);\n  }\n}\nfunction handleCloseButtonClick(evt) {\n  var button = evt.target;\n  var popup = button.closest('.popup');\n  closeModal(popup);\n}\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(validationConfig.inputErrorClass);\n  errorElement.textContent = inputElement.validationMessage;\n  errorElement.classList.add(validationConfig.errorClass);\n};\nvar hideInputError = function hideInputError(formElement, inputElement, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  if (errorElement) {\n    inputElement.classList.remove(validationConfig.inputErrorClass);\n    errorElement.classList.remove(validationConfig.errorClass);\n    errorElement.textContent = \"\";\n  }\n};\n\n/* Проверка валидности поля */\nvar checkInputValidity = function checkInputValidity(formElement, inputElement, validationConfig) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.error);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, validationConfig);\n  } else {\n    hideInputError(formElement, inputElement, validationConfig);\n  }\n};\n\n/* Проверка не валидных полей */\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\n\n/* Изменение состояния кнопки подтверждения */\nvar toggleButtonState = function toggleButtonState(inputList, validationConfig, buttonElementReturn) {\n  if (hasInvalidInput(inputList)) {\n    buttonElementReturn.setAttribute(\"disabled\", true);\n    buttonElementReturn.classList.add(validationConfig.inactiveButtonClass);\n  } else {\n    buttonElementReturn.removeAttribute(\"disabled\", false);\n    buttonElementReturn.classList.remove(validationConfig.inactiveButtonClass);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener(\"input\", function () {\n      checkInputValidity(formElement, inputElement, validationConfig);\n      toggleButtonState(inputList, validationConfig, buttonElement);\n    });\n  });\n};\n\n/* Активация валидации */\nvar enableValidation = function enableValidation(validationConfig) {\n  var formElementList = Array.from(document.querySelectorAll(validationConfig.formSelector));\n  formElementList.forEach(function (formElement) {\n    setEventListeners(formElement, validationConfig);\n  });\n};\n\n/* Очистка валидации */\nfunction clearValidation(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElementReturn = formElement.querySelector(validationConfig.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    return hideInputError(formElement, inputElement, validationConfig);\n  });\n  toggleButtonState(inputList, validationConfig, buttonElementReturn);\n}\n\n\n//# sourceURL=webpack://yandex.praktikum/./src/components/validation.js?");

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