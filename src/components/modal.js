function open(element){
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEsc);
}
  
function close(element){
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeEsc);
};

function closeEsc(evt) {
  if (evt.key === "Escape") {
    const currentPopup = document.querySelector(".popup_is-opened");
    close(currentPopup);
  }
};

function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    close(evt.currentTarget);
  }
};

export {open,close,closeOverlay}



