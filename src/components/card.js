/* Функция создания карточки */
function createCard(element, removeCard, addLike, openImage){
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = element.link;
  card.querySelector('.card__title').textContent = element.name;
  card.querySelector('.card__image').alt = element.name;
  const likeButton = card.querySelector('.card__like-button')
  const deleteButton = card.querySelector('.card__delete-button');
  const cardImage = card.querySelector('.card__image');

  deleteButton.addEventListener('click',function(){
    removeCard(card)
  })
  likeButton.addEventListener('click', function(){
    addLike(likeButton)
  })
  cardImage.addEventListener('click', function(){
    openImage(element)
 })
  return card
}
/* Функция удаления карточки */
function removeCard(card) {
  card.remove()
}
/* Функция добавления лайка */
function addLike(element){
  if(element.classList.contains('card__like-button_is-active')){
    element.classList.remove('card__like-button_is-active')
  } else {
    element.classList.add('card__like-button_is-active')
  }
}

export{createCard, removeCard, addLike}