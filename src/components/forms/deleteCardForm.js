import { deleteCardApi } from "../api.js";

/* Удаление карточки */
export function deleteCard(selectedCard, id) {
  deleteCardApi(id)
    .then(() => {
      selectedCard.remove();
    })
    .catch((err) => {
      console.error("Произошла ошибка при удалении карточки:", err);
    });
}

