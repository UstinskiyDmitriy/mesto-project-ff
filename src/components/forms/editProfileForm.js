import { patchUser } from "../../components/api.js";
import { closeModal } from "../../components/modal.js";
import {nameInput,jobInput,userJobElement,userNameElement,} from "../const.js";
import { handleSubmit } from "./multiForms.js";

/* Установка начальных значений */
export function setInitialEditProfileFormValues() {
  nameInput.value = userNameElement.textContent;
  jobInput.value = userJobElement.textContent;
}

/* Обработчик отправки формы */
export function handleFormSubmit(evt) {
  
  function makeRequest() {
    const name = nameInput.value;
    const about = jobInput.value;
    return patchUser(name, about)
      .then((dataUser) => {
        userNameElement.textContent = dataUser.name;
        userJobElement.textContent = dataUser.about;
        setInitialEditProfileFormValues();
        closeModal(evt.target.closest(".popup_is-opened"));
      });
  }
  handleSubmit(makeRequest, evt);
}