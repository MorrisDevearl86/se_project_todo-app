import Popup from './Popup.js';

class PopupWithForm extends Popup {
constructor({popupSelector, handleFormSubmit}) {
    super({popupSelector});
    console.log(this._popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._submitButton = this._formElement.querySelector('.popup__save-button');
    this._defaultSubmitButtonText = this._submitButton.textContent;
}}
export default PopupWithForm;