// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesItem = cardTemplate.querySelector('.places__item')

// @todo: DOM узлы
const content = document.querySelector('.content')
const places = content.querySelector('.places')
const placesList = places.querySelector('.places__list')



// @todo: Функция создания карточки
function addCard() {
initialCards.forEach(function(element) {
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  const СardImage = card.querySelector('.card__image').src = element.link
  const cardTitle = card.querySelector('.card__title').textContent = element.name
  const deleteButton = card.querySelector('.card__delete-button')
  deleteButton.addEventListener('click',function(){
   deleteCard(card)
  })
  placesList.append(card)
})
}

// @todo: Функция удаления карточки
function deleteCard(card) {
  card.remove()
}


// @todo: Вывести карточки на страницу
addCard()
