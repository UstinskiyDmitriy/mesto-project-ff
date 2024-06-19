import { avatarInput, avatarImage, avatarForm } from "../const.js";
import { patchAvatar } from "../api.js";
import { closeModal } from "../modal.js";
import { handleSubmit } from "./multiForms.js";

/* Обработчик отправки формы аватара */
export function handleAvatarFormSubmit(event) {
  
  function makeRequest() {
    const avatar = avatarInput.value;
    return patchAvatar(avatar)
      .then((res) => {
        avatarImage.setAttribute("style", `background-image: url('${res.avatar}')`);
        closeModal(avatarForm);
      });
  }
  handleSubmit(makeRequest, event);
}