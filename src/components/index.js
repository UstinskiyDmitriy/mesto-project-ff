import { initialCards } from "./cards";
import "../pages/index.css"
import {addLike, createCard, removeCard} from "./card.js"
import {openModal, closeModal, closeOverlay} from "./modal.js"

// DOM узлы
const content = document.querySelector('.content');
const profileTitle = content.querySelector('.profile__title')
const profileDescription = content.querySelector('.profile__description')
const places = content.querySelector('.places');
const placesList = places.querySelector('.places__list');
const profileEditButton = content.querySelector('.profile__edit-button')
const profileAddButton = content.querySelector('.profile__add-button')
const popupList = document.querySelectorAll('.popup');
const popupCloseButtonList = document.querySelectorAll('.popup__close')
const profilePopup = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card')
const imagePopup = document.querySelector('.popup_type_image')
const newCardFormElement = popupNewCard.querySelector('.popup__form')
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
const inputCardName = document.querySelector('.popup__input_type_card-name');
const inputCardUrl = document.querySelector('.popup__input_type_url')

/*Функция открытия попапа картинки*/
function openImage(element){
  imagePopup.querySelector('.popup__image').src = element.link
  imagePopup.querySelector('.popup__image').alt = element.name
  imagePopup.querySelector('.popup__caption').textContent = element.name
  openModal(imagePopup)
} 

/* Обработчики события submit */
function profileFormSubmit(evt) {
  evt.preventDefault(); 
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value
  profileTitle.textContent = nameInputValue
  profileDescription.textContent = jobInputValue
  evt.target.reset()
  closeModal(profilePopup)
}

function newCardFormSubmit(evt) {
  evt.preventDefault();
  const obj = {
    link: inputCardUrl.value,
    name: inputCardName.value
  }
  placesList.prepend(createCard(obj, removeCard, addLike, openImage))
  console.log(createCard)
  closeModal(popupNewCard)
  evt.target.reset()
}

/* Открытие попапов */
profileEditButton.addEventListener('click', function(evt){
  openModal(profilePopup)
  profileFormElement.reset()
})

profileAddButton.addEventListener('click', function(){
  openModal(popupNewCard)
  newCardFormElement.reset()
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
popupNewCard.addEventListener('submit', newCardFormSubmit)


/* Вывести карточки на страницу */
  initialCards.forEach(function(element){
    placesList.append(createCard(element, removeCard, addLike, openImage))
  })



