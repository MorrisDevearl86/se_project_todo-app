class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);

    if (!this._popupElement) {
      throw new Error(`Popup not found with selector: ${popupSelector}`);
    }

    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  // Escape key handler
  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {

    // Close button

    if (this._popupCloseBtn) {
      this._popupCloseBtn.addEventListener("click", () => {
        this.close();
      });
    }

    // Close on overlay click
    
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}

export default Popup;
