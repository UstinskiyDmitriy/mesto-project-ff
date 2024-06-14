import "../pages/index.css"
import {addLike, createCard, handleDeleteCard, removeCard} from "./card.js"
import {openModal, closeModal, closeOverlay} from "./modal.js"
import {enableValidation,clearValidation, validationConfig} from "./validation.js"
import { deleteCardByApi, 
  getInitialCards,
  getUser,
  getCards,
  patchProfile,
  postCard} from "./api.js";
import { profileFormSubmit } from "./forms/editProfileForm.js";
import { newCardFormSubmit } from "./forms/newCardForm.js";
import { handleCardDelete, openPopupDelete} from "./forms/deleteCardForm.js";



// DOM узлы
import { content,
  profileTitle,
  profileDescription,
  placesList,
  profileEditButton,
  profileAddButton,
  popupList,
  popupCloseButtonList,
  profilePopup,
  popupNewCard,
  imagePopup,
  newCardFormElement,
  profileFormElement,
  nameInput,
  jobInput,
  deleteCardPopup,
  avatarImagePopup,
  profileImage
 } from "./const.js";

 
 
 
 

enableValidation(validationConfig)

/*Функция открытия попапа картинки*/
function openImage(element){
  imagePopup.querySelector('.popup__image').src = element.link
  imagePopup.querySelector('.popup__image').alt = element.name
  imagePopup.querySelector('.popup__caption').textContent = element.name
  openModal(imagePopup)
} 

/* Замена данных пользователя в профиле */
getUser()
  .then((result) => {
    profileTitle.textContent = result.name
    profileDescription.textContent = result.about
  })

  // Функция для установки информации о пользователе на страницу
let userId = "";
function setUserInfo(user) {
  profileTitle.textContent = user.name;
  profileDescription.textContent = user.about;
  avatarImagePopup.setAttribute(
    "style",
    `background-image: url('${user.avatar}')`,
  );
  return userId = user._id;
}



/* Открытие попапов */
profileEditButton.addEventListener('click', function(){
  clearValidation(profileFormElement, validationConfig);
  nameInput.value = profileTitle.textContent
  jobInput.value = profileDescription.textContent
  openModal(profilePopup)
})

profileAddButton.addEventListener('click', function(){
  clearValidation(newCardFormElement, validationConfig);
  openModal(popupNewCard)
  newCardFormElement.reset()
})

profileImage.addEventListener('click',function(){
  
  openModal(avatarImagePopup)
})

/* Закрытие попапов */
popupCloseButtonList.forEach(function(el){
  el.addEventListener('click', function(){
   closeModal(el.closest('.popup'))
  })
})

/* Закрытие попапов по overlay */
popupList.forEach(function(el){
  el.addEventListener('click',function(overlay){
    closeOverlay(overlay)
  })
})

/* Плавное открытие попапов */
popupList.forEach(function(el){
el.classList.add("popup_is-animated");
})

/* Прикрепляем обработчик к форме:
он будет следить за событием “submit” - «отправка» */
profilePopup.addEventListener('submit', profileFormSubmit);
popupNewCard.addEventListener('submit', function(event){
  newCardFormSubmit(event, removeCard, addLike, openImage, userId)
})
deleteCardPopup.addEventListener('submit',handleCardDelete)
 


/* Вывести карточки на страницу */

getInitialCards()
  .then((result) => {
    result.forEach(function(element){
      placesList.append(createCard(element, openPopupDelete, addLike, openImage,userId))
    })
  
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  }); 

  

  
  Promise.all([getUser(), getCards()])
  .then(([user, cards]) => {
    setUserInfo(user);
    getInitialCards(cards,openPopupDelete, addLike, openImage,userId);
  })
  .catch((err) => {
    console.error("Произошла ошибка при получении данных:", err);
  });


