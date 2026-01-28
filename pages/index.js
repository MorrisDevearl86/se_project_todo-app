// Imports and constants ↓↓

import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Popup from "./components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "./components/TodoCounter.js";

// DOM elements ↓↓

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoPopupEl = document.querySelector(".add-todo-popup-class");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

addTodoPopup.setEventListeners();

// const section = new Section({
//   items: [], //pass initial todos
//   render: () => {
//     //Generate todo item
//     //add it to the todo list
//   },
//    containerSelector: "todos__list",
//    }); // TODO - write the function
//    // call section instance's renderItems method

// Modal open/close functions ↓ ↓

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

function handleEscapeClose(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".popup_visible");
    closeModal(openModal);
  }
// Form validation ↓↓

const newTodoValidator = new FormValidator(
  validationConfig, addTodoForm);
newTodoValidator.enableValidation();

// Event listeners ↓↓

// *********************************************************

// addTodoButton.addEventListener("click", () => {
//   openModal(addTodoPopup);
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id, completed: false };

//   renderTodo(values);

//   newTodoValidator.resetValidation();

//   addTodoPopup.close();
// });

// *************************************************

initialTodos.forEach((item) => {
  renderTodo(item);
});
}