function openModal(element) {
  element.classList.add('popup_is-opened');
  document.addEventListener("keydown", closeEsc);
}

function closeModal(element) {
if (element) {
element.classList.remove("popup_is-opened");
document.removeEventListener("keydown", closeEsc);
}
}


function closeEsc(evt) {
  if (evt.key === "Escape") {
    const currentPopup = document.querySelector('.popup_is-opened');
      closeModal(currentPopup);
    }
  }


function closeOverlay(evt) { 
    if (evt.target === evt.currentTarget) {
      closeModal(evt.target);
  }
}

function handleCloseButtonClick(evt) {
  const button = evt.target;
  const popup = button.closest('.popup');
  closeModal(popup);
}



export { 
    closeOverlay,
    closeModal, 
    openModal,
    handleCloseButtonClick
};


