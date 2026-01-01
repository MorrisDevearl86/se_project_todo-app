// Imports and constants ↓↓

import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

// DOM elements ↓↓

 
const  addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn =  addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const  addTodoPopup = new  PopupWithForm({popupSelector: "#add-todo-popup"
handleFormSubmit: () => {},});

const section = new Section({
  items: [],
  render: () => {},
  containerSector: "todos__list",
});

// call section instance methods if needed and render todos

// Modal open/close functions ↓ ↓

// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};
// Todo generation and rendering ↓↓

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};

// Form validation ↓↓

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

// Event listeners ↓↓

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal( addTodoPopupEl);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id, completed: false };

  renderTodo(values);

  newTodoValidator.resetValidation();

  closeModal( addTodoPopupEl);
});

initialTodos.forEach((item) => {
  renderTodo(item);
});

// initialTodos,forEach((item) => {const todo = generateTodo(item); 
// todosList.append(todo);});
