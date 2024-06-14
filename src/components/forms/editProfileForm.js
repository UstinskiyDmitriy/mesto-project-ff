/* Обработчики события submit */
import { handleSubmit } from "./handleSubmit";
import {nameInput,jobInput,profileTitle,profileDescription,profilePopup} from "../const"
import { patchProfile } from "../api";
import { closeModal } from "../modal";
export function profileFormSubmit(evt) {
  evt.preventDefault()
  function makeRequest() {
    const name = nameInput.value;
    const about = jobInput.value;
    return patchProfile(name, about)
      .then((dataUser) => {
        profileTitle.textContent = dataUser.name;
        profileDescription.textContent = dataUser.about;
        
        closeModal(profilePopup);
      });
  }
  handleSubmit(makeRequest);
}