import { deleteCardByApi } from "../api";
import { openModal,closeModal } from "../modal";
import { deleteCardPopup } from "../const";

 let selectedCard;
 let id;

// Функция открытия попапа для подтверждения удаления карточки
export const openPopupDelete = (cardElement, cardId) => {
  selectedCard = cardElement;
  id = cardId;
  openModal(deleteCardPopup);
};

// Функция закрытия попапа подтверждения удаления карточки
const closePopupDelete = () => {
  closeModal(deleteCardPopup);
};

// Функция удаления карточки
export function deleteCard(selectedCard,id) {
  
  deleteCardByApi(id)
    .then(() => {
      
      selectedCard.remove()
      closePopupDelete();
    })
    .catch((err) => {
      console.error("Произошла ошибка при удалении карточки:", err);
    });
}


// Обработчик события отправки формы для удаления карточки
export function handleCardDelete(evt,selectedCard, id) {
  evt.preventDefault();
  // Вызываем функцию удаления карточки
  deleteCard(selectedCard, id)
}
