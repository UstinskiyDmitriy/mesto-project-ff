import { initialCards } from "./cards";
import "../pages/index.css"
import {createCard} from "./card.js"
import {open, close, closeOverlay} from "./modal.js"

// DOM узлы
const content = document.querySelector('.content');
const places = content.querySelector('.places');
const placesList = places.querySelector('.places__list');
const profileEditButton = content.querySelector('.profile__edit-button')
const profileAddButton = content.querySelector('.profile__add-button')
const popupButton = document.querySelector('.popup__button');
const popup = document.querySelectorAll('.popup');
const popupCloseButton = document.querySelectorAll('.popup__close')
const profilePopup = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupImage = document.querySelector('.popup_type_image')
const formElement = profilePopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const inputCardName = document.querySelector('.popup__input_type_card-name');
const inputCardUrl = document.querySelector('.popup__input_type_url')


//Открытие попапов
profileEditButton.addEventListener('click', function(){
  open(profilePopup)
})

profileAddButton.addEventListener('click', function(){
  open(popupNewCard)
})

//Закрытие попапов по Esc
popupCloseButton.forEach(function(el){
  el.addEventListener('click', function(){
    close(popupNewCard)
    close(profilePopup)
    close(popupImage)
  })
    
})
// Закрытие попапов по overlay
popup.forEach(function(el){
  el.addEventListener('click',function(overlay){
    closeOverlay(overlay)
  })
})

// Плавное открытие попапов
popup.forEach(function(el){
el.classList.add("popup_is-animated");
})

//Обработчик события submit
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value
  let profileTitle = content.querySelector('.profile__title')
  let profileDescription = content.querySelector('.profile__description')
  profileTitle.textContent = nameInputValue
  profileDescription.textContent = jobInputValue
  evt.target.reset()
}

function newCardFormSubmit(evt) {
  evt.preventDefault();
  const obj = {
    name: inputCardName.value,
    link: inputCardUrl.value,
  }
  placesList.prepend(createCard(obj))
  popupButton.addEventListener('click', close(popupNewCard))
  evt.target.reset()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profilePopup.addEventListener('submit', handleFormSubmit);
popupNewCard.addEventListener('submit', newCardFormSubmit)


// Вывести карточки на страницу
  initialCards.forEach(function(element){
    placesList.append(createCard(element))
  })



