const newTodo = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
    const text = newTodo.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    li.appendChild(document.createTextNode(' '));
    li.appendChild(removeBtn);
    todoList.appendChild(li);
    newTodo.value = '';
});