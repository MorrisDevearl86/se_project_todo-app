import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector = "#add-todo-popup", handleFormSubmit }) {
    if (!popupSelector) {
      throw new Error("PopupWithForm: popupSelector is required");
    }

    super({ popupSelector });

    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formValues = {};

    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  // PopupWithForm.js
  setEventListeners() {
    super.setEventListeners();
  
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

export default PopupWithForm;
