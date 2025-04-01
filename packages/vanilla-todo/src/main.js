/// <reference lib="dom" />
const newTodo = document.getElementById("newTodo");
const addButton = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", () => {
  const text = newTodo.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;

  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(document.createTextNode(" "));
  li.appendChild(removeButton);
  todoList.appendChild(li);
  newTodo.value = "";
});
