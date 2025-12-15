class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this.formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _checkInputValidity(inputElement) {
    this._checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );

  } else {
    hideInputError(formElement, inputElement, settings);
  }}


  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(settings.this._inputSelector)
    );

    const buttonElement = formEl.querySelector(settings.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }
  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}}

export default FormValidator;
