import "./theme.css";
import { addTodo } from "./todo";

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTodo(task, list);
    input.value = "";
  }
});
