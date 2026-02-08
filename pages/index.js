// ↓↓ Import(s) ↓↓

import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";

// ↓↓ DOM Elements ↓↓

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupSelector = "#add-todo-popup";
const addTodoForm = document.querySelector("#add-todo-form");

// ↓↓ Todo Generator ↓↓

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

// ↓↓ Section (Todo List) ↓↓

const todoSection = new Section(
  {
    items: initialTodos,
    renderer: (item) => {
      const todoElement = generateTodo(item);
      todoSection.addItem(todoElement);
    },
  },
  ".todos__list",
);

todoSection.renderItems();

// ↓↓ PopupWithForm (Add Todo) ↓↓

const handleAddTodoSubmit = (formData) => {
  const todoData = {
    name: formData.name,
    date: new Date(formData.date),
    id: uuidv4(),
    completed: false,
  };

  const todoElement = generateTodo(todoData);
  todoSection.addItem(todoElement);

  newTodoValidator.resetValidation();
  addTodoPopup.close();
};

const addTodoPopup = new PopupWithForm(
  addTodoPopupSelector,
  handleAddTodoSubmit,
);

addTodoPopup.setEventListeners();

// ↓↓ Form Validation ↓↓

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation();

// ↓↓ Event Listeners ↓↓

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});
