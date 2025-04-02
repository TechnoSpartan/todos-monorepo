export function addTodo(task: string, list: HTMLUListElement) {
  const li: HTMLLIElement = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  list.appendChild(li);
}
