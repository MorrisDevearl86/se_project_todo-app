// Imports and constants ↓↓

import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

// DOM elements ↓↓

const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const addTodoButton = document.querySelector(".add-todo-button");

// Todo generation ↓↓

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

// Section instance ↓↓

const todoSection = new Section(
  {
    items: initialTodos,
    render: (item) => {
      const todoElement = generateTodo(item);
      todoSection.addItem(todoElement);
    },
  },
  ".todos__list"
);

// Initial render ↓↓

initialTodos.forEach((item) => {
  todoSection.renderItems(item);
});

// Form validation ↓↓

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

// Popup instance ↓↓

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (formData) => {
    // Handle form submission here
  },
});

// Event listeners ↓↓

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const newTodo = {
    id: uuidv4(),
    name,
    date,
    completed: false,
  };

  todoSection.renderItems(newTodo);
  newTodoValidator.resetValidation();
  addTodoPopup.close();
});
