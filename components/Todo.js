class Todo {
  constructor(data, selector) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._data = data;
    this._selector = selector;
  }

  _setEventListeners() {
    this._deleteBtnEl.addEventListener("click", () => this.handleDelete());
    this._todoCheckboxEl.addEventListener("change", () => this.handleCheck());
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  _generateNameEl() {
    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoNameEl.textContent = this._data.name;
  }

  _generateDateEl() {
    this._todoDateEl = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }
  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  handleDelete() {
    this._todoElement.remove();
  }

  handleCheck() {
    this._data.completed = !this._data.completed;
  }

  getView() {
    this._todoElement = this._getTemplate();

    this._generateNameEl();
    this._generateDateEl();
    this._generateCheckboxEl();

    // Get delete button reference

    this._deleteBtnEl = this._todoElement.querySelector(".todo__delete-btn");

    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
