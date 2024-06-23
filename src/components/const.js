const editFormElement = document.querySelector('.edit-profile')
const newPlaceFormElement = document.querySelector('.new-card')
const avatarFormElement = document.querySelector('.avatar-form')
const avatarForm = document.querySelector('.popup_type_avatar');
const avatarImage = document.querySelector('.profile__image');
const avatarInput = avatarFormElement.querySelector('.popup__input_type_url')
const deleteCardForm = document.querySelector('.delete-card')
const buttonTypeCard = document.querySelector('.popup_type_image');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupsArray = Array.from(document.querySelectorAll('.popup'));
const editForm = document.querySelector('.popup_type_edit');
const newCardForm = document.querySelector('.popup_type_new-card');
const deletePopup = document.querySelector('.popup_type_delete-card');
const placesList = document.querySelector('.places__list');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const userNameElement = document.querySelector('.profile__title');
const userJobElement = document.querySelector('.profile__description');
const newNameInput = newPlaceFormElement.querySelector('.popup__input_type_card-name');
const newUrlInput = newPlaceFormElement.querySelector('.popup__input_type_url');
const popupImageCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector('.popup__image');
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export {
  editFormElement,
  newPlaceFormElement,
  avatarFormElement,
  avatarInput,
  avatarForm,
  avatarImage,
  deleteCardForm,
  buttonTypeCard,
  profileEditButton,
  profileAddButton,
  popupsArray,
  editForm,
  newCardForm,
  deletePopup,
  placesList,
  nameInput,
  jobInput,
  userNameElement,
  userJobElement,
  newNameInput,
  newUrlInput,
  popupImageCaption,
  popupImage,
  validationConfig
}