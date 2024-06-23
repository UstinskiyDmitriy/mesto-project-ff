import "../pages/index.css";
import {closeOverlay,openModal,handleCloseButtonClick} from "./modal.js";
import {
  popupsArray,
  placesList,
  editForm,
  editFormElement,
  profileEditButton,
  userNameElement,
  userJobElement,
  newCardForm,
  profileAddButton,
  avatarForm,
  avatarImage,
  avatarInput,
  validationConfig,
  newNameInput,
  newUrlInput,
  popupImage,
  popupImageCaption,
  buttonTypeCard
} from "./const.js";

import {getCards,getUser} from "./api.js";

import {createCard,handleLikes} from "./card.js";

import {clearValidation,enableValidation} from "./validation.js";

import {handleFormSubmit,setInitialEditProfileFormValues} from "./forms/editProfileForm.js";

import {handleNewCardFormSubmit} from "./forms/newCardForm.js";

import {deleteCard} from "./forms/deleteCardForm.js";

import {handleAvatarFormSubmit} from "./forms/avatarForm.js";

enableValidation(validationConfig);

/* Открытие попапа картинки */
function openImagePopup(cardImg){
  popupImage.src = cardImg.src;
  popupImage.alt = cardImg.alt;
  popupImageCaption.textContent = cardImg.alt;
  openModal(buttonTypeCard);
}

/* Колбэки карточки */
const callbacksObject = {
  deleteCardCallback: deleteCard,
  openImageCallback: openImagePopup,
  handleLikesCallback: handleLikes,
};

/* Добавление слушателя кнопке редактирования профиля */
profileEditButton.addEventListener("click", () => {
  clearValidation(editFormElement, validationConfig);
  setInitialEditProfileFormValues();
  openModal(editForm);
});

/* Добавление слушателя кнопке создания новой карточки */
profileAddButton.addEventListener("click", () => {
  clearValidation(newCardForm, validationConfig);
  newNameInput.value ='';
  newUrlInput.value = '';
  openModal(newCardForm);
});
/* Добавление слушателя редактирования аватара*/
avatarImage.addEventListener("click", () => {
  clearValidation(avatarForm, validationConfig);
  avatarInput.value = ''
  openModal(avatarForm);
});
/* Закрытие попапов */
popupsArray.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close");
  popup.addEventListener("click", closeOverlay);
  closeButton.addEventListener("click", handleCloseButtonClick);
});

/* Вывод информации о пользователе */
let userId = "";
function setUserInfo(user) {
  userNameElement.textContent = user.name;
  userJobElement.textContent = user.about;
  avatarImage.setAttribute(
    "style",
    `background-image: url('${user.avatar}')`
  );
  userId = user._id;
}

/* Добавление карточек на страницу */
export function renderCards(cards, callbacksObject, userId) {
  cards.forEach(card => {
    const cardElement = createCard(card, callbacksObject, userId);
    placesList.append(cardElement);
  });
}

editForm.addEventListener("submit", handleFormSubmit);
newCardForm.addEventListener("submit", (event) => {
  handleNewCardFormSubmit(event, callbacksObject, userId);
});
avatarForm.addEventListener("submit",handleAvatarFormSubmit)

Promise.all([getUser(), getCards()])
  .then(([user, cards]) => {
    setUserInfo(user);
    renderCards(cards, callbacksObject, user._id);
  })
  .catch((err) => {
    console.error("Произошла ошибка при получении данных:", err);
  });
