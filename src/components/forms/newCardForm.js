import { postCard } from "../api.js";
import { createCard } from "../card.js";
import { closeModal } from "../modal.js";
import {newCardForm,newNameInput,newUrlInput,placesList} from "../const.js";
import { handleSubmit } from "./multiForms.js";

/* Обработчик отправки формы создания карточки */
export function handleNewCardFormSubmit(event, callbacksObject, userId) {
  function makeRequest() {
    return postCard(newNameInput.value,newUrlInput.value)
      .then((card) => {
        
        const newCardElement = createCard(card, callbacksObject, userId);
        
        placesList.prepend(newCardElement); 
        closeModal(newCardForm); 
      });
  }

  handleSubmit(makeRequest, event);
}