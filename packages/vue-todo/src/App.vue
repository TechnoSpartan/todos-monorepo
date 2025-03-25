<template>
  <div style="margin: 20px;">
    <h1>Vue Todo</h1>
    <input v-model="newTodo" placeholder="Add a todo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const todos = ref([]);
    const newTodo = ref('');

    function addTodo() {
      if (!newTodo.value.trim()) return;
      todos.value.push(newTodo.value);
      newTodo.value = '';
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    return { todos, newTodo, addTodo, removeTodo };
  }
}
</script>
