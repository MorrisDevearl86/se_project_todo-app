class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this.popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }
  
  // ↓ Escape Button key handler ↓
   
  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    debugger; 
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  setEventListeners() {    
    this._popupCloseBtn.addEventListener("click", () => {
      this._popupElement.addTodoPopup.close();
    });
    
    // ↓ Close button listener ↓

    // const closeButton = this._popupElement.querySelector(".popup__close");
    // closeButton.addEventListener("click", () => {
    //   this.close();
    // }); 

    this._popupElement.addEventListener("mousedown", (evt) => {

           
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}

export default Popup;