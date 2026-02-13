class TodoCounter {
  // todos: array of todo objects
  // selector: CSS selector for the counter element
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this.completed = 0;
    this.total = 0;

    if (!this._element) {
      throw new Error(
        `TodoCounter element not found with selector: ${selector}`,
      );
    }

    // Count completed todos
    this._completed = todos.filter((todo) => todo.completed).length;

    // Total todos
    this._total = todos.length;

    // Initialize text
    this._updateText();
  }

  // Call when a checkbox is clicked or a completed todo is deleted
  updateCompleted = (increment) => {
    if (increment) {
      this._completed += 1;
    } else {
      this._completed -= 1;
    }

    this._updateText();
    
  };

  // Call when a todo is added or deleted
  updateTotal = (increment) => {
    if (increment) {
      this._total += 1;
    } else {
      this._total -= 1;
    }

    this._updateText();
  };

  // Update counter text
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
