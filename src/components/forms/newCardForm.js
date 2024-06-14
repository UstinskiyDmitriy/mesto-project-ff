
/* Добавление новой карточки */
import { handleSubmit } from "./handleSubmit";
import { postCard } from "../api";
import { inputCardName,inputCardUrl } from "../const";
export function newCardFormSubmit(event, removeCard, addLike, openImage, userId) {
  event.preventDefault()
  function makeRequest() {
    return postCard(inputCardName.value, inputCardUrl.value)
      .then((card) => {
        if (card.ok) {
          const newCardElement = createCard(card, removeCard, addLike, openImage, userId);
          placesList.prepend(newCardElement);
          closeModal(popupNewCard);
        }
      });
  }
  handleSubmit(makeRequest);
}