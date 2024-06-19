import { deleteLikeCard, addLikeCard } from "./api";
import {popupImage,popupImageCaption,buttonTypeCard,} from "./const";

/* Создание темплейта карточек */
export function createCard(cards, callbacksObject, userId) {
  const {
    deleteCardCallback,
    openImageCallback,
    handleLikesCallback,
  } = callbacksObject;
  
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content.querySelector(".places__item").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardImage.src = cards.link;
  cardImage.alt = cards.name;
  cardTitle.textContent = cards.name;
  cardLikeCounter.textContent = cards.likes.length;
  
  /* Удаление своих карточек */
  if (userId !== cards.owner._id) {
    deleteButton.style.display = "none";
    } else {
    deleteButton.addEventListener("click", () => {
      const cardId = cards._id;
      deleteCardCallback(cardElement , cardId);
    });
    
  }
  /* Проверка наличия лайка */
  const isLiked = cards.likes.some((like) => like._id === userId);
  if (isLiked) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }
  
  cardLikeButton.addEventListener("click", () => {
    handleLikesCallback(cardLikeCounter, cardLikeButton, cards);
  });

  cardImage.addEventListener("click", () => {
    openImageCallback(cardImage, popupImage, popupImageCaption, buttonTypeCard);
  });

  return cardElement;
}

/* Функция подсчета лайков */
export function handleLikes(cardLikeCounter, cardLikeButton, cards) {
  if (cardLikeButton.classList.contains("card__like-button_is-active")) {

    deleteLikeCard(cards._id)
    .then((res) => {
      cardLikeButton.classList.toggle("card__like-button_is-active");
      cardLikeCounter.textContent = res.likes.length;
    })
    .catch((err) => {
      console.error("Произошла ошибка при удалении лайка:", err);
    });
  } else {
    
    addLikeCard(cards._id)
    .then((res) => {
      cardLikeButton.classList.toggle("card__like-button_is-active");
      cardLikeCounter.textContent = res.likes.length;
    })
    .catch((err) => {
      console.error("Произошла ошибка при добавлении лайка:", err);
    });
  }
}