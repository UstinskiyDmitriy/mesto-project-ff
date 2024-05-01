// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesItem = cardTemplate.querySelector('.places__item');

// @todo: DOM узлы
const content = document.querySelector('.content');
const places = content.querySelector('.places');
const placesList = places.querySelector('.places__list');



// // @todo: Функция создания карточки
function createCard(element, deleteCard){
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = element.link;
  card.querySelector('.card__title').textContent = element.name;
  card.querySelector('.card__image').alt = element.name;
  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click',function(){
   deleteCard = removeCard(card)
  });
  return card
}
// // @todo: Функция удаления карточки
function removeCard(card) {
  card.remove()
}

// // @todo: Вывести карточки на страницу
initialCards.forEach(function(element){
  placesList.append(createCard(element))
})
