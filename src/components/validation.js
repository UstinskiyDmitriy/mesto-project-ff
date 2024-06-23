
const showInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = "";
  }
};

/* Проверка валидности поля */
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.error);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

/* Проверка не валидных полей */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

/* Изменение состояния кнопки подтверждения */
const toggleButtonState = (inputList,validationConfig,buttonElementReturn) => {
  if (hasInvalidInput(inputList)) {
    buttonElementReturn.setAttribute("disabled", true);
    buttonElementReturn.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElementReturn.removeAttribute("disabled", false);
    buttonElementReturn.classList.remove(validationConfig.inactiveButtonClass);
  }
};


const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, validationConfig, buttonElement);
    });
  });
};

/* Активация валидации */
const enableValidation = (validationConfig) => {
  const formElementList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formElementList.forEach((formElement) => {
    setEventListeners(formElement, validationConfig);
  });
};

/* Очистка валидации */
function clearValidation(formElement, validationConfig) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElementReturn = formElement.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((inputElement) =>
    hideInputError(formElement, inputElement, validationConfig)
  );
  toggleButtonState(inputList, validationConfig, buttonElementReturn);
}

export { enableValidation, clearValidation };