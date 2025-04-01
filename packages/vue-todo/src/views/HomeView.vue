<template>
  <div style="margin: 20px">
    <h2>Vue Todo</h2>
    <!-- Mantenemos la misma lógica de la lista (la que teníamos en App.vue) -->
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

<script setup>
import { ref } from "vue";

const todos = ref([]);
const newTodo = ref("");

function addTodo() {
  if (!newTodo.value.trim()) return;
  todos.value.push(newTodo.value);
  newTodo.value = "";
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}
</script>
