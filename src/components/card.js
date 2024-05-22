import {open} from "./modal"

//Функция создания карточки
function createCard(element, deleteCard, likeCard, openImage){
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = element.link;
  card.querySelector('.card__title').textContent = element.name;
  card.querySelector('.card__image').alt = element.name;
  const likeButton = card.querySelector('.card__like-button')
  const deleteButton = card.querySelector('.card__delete-button');
  const cardImage = card.querySelector('.card__image');
  const imagePopup = document.querySelector('.popup_type_image')
  deleteButton.addEventListener('click',function(){
   deleteCard = removeCard(card)
  });
  likeButton.addEventListener('click', function(){
    likeCard = addLike(likeButton)
  })
  openImage = cardImage.addEventListener('click', function(){
  imagePopup.querySelector('.popup__image').src = element.link
  imagePopup.querySelector('.popup__caption').textContent = element.name
    open(imagePopup)
 })
  return card
}
// Функция удаления карточки
function removeCard(card) {
  card.remove()
}
// Функция добавления лайка
function addLike(element){
  if(element.classList.contains('card__like-button_is-active')){
    element.classList.remove('card__like-button_is-active')
  } else {
    element.classList.add('card__like-button_is-active')
  }
}

export{createCard, removeCard, addLike}