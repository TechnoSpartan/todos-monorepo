import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("todosStore", () => {
  const todos = ref([]);

  function addTodo(todoText) {
    todos.value.push(todoText);
  }

  function removeTodo(index) {
    todos.value.splice(index, 1);
  }

  return { todos, addTodo, removeTodo };
});
