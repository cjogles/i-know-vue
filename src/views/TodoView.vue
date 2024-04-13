<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
const store = useTodoStore()
const handleNewTodo = (e) => {
  console.log(e.value)
}
</script>

<template>
  <div class="container-todo">
    <nav>
      <a href="/">Home</a> |
      <a href="projects">Projects</a>
    </nav>
    <section>
      <h1 class="todo">To Do List Project</h1>
      <div>
        <p>pseudo code - what I want this app to do</p>
        <ol>
          <li>add a task along with any of its potential subtasks</li>
          <li>remove a task along with any of its potential subtasks</li>
          <li>add a subtask to a task</li>
          <li>remove a subtask from a task</li>
          <li>save progress in the single page application when navigating to different pages</li>
          <li>download todo list as pdf</li>
        </ol>
      </div>
    </section>
  </div>
  <div class="container-todo">
    <section class="todo-box">
      <h1 class="todo">Todo List</h1>
      <div v-for="todo in store.todos" :key="todo.index">
        <div v-if="Array.isArray(todo.value)" class="isArray isArrayBox">
          <div class="flex space-top">
            <p>Multi-task</p>
            <button @click="store.removeTodo(todo)">Delete entire multi-task</button>
          </div>
          <div v-for="item in todo.value" :key="item.index + 'nested'">
            <input
              type="checkbox"
              :v-model="item.index"
              :value="item.value"
              @change="store.removeTodo(item, true)"
            />
            &nbsp;
            <label for="checkbox">{{ item.value }}</label>
          </div>
          <input v-model="store.newNestedTodo" type="text" />
          <button @click="() => store.addNestedTodo(store.newNestedTodo, todo.index)">
            Add Todo
          </button>
        </div>
        <div v-if="!Array.isArray(todo.value)">
          <input
            type="checkbox"
            :v-model="todo.index"
            :value="todo.value"
            @change="store.removeTodo(todo)"
          />
          &nbsp;
          <label for="checkbox">{{ todo.value }}</label>
        </div>
      </div>
      <br />
      <div class="flex-col">
        <input v-model="store.newTodo" type="text" />
        <button @click="() => store.addTodo(store.newTodo)">Add Todo</button>
        <button @click="() => store.reset()">Mark All Completed</button>
        <button @click="() => store.addNewMultiTask()">Add New Multi-task</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.space-top {
  top-margin: 10px;
}
.flex {
  display: flex;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.isArray {
  margin-left: 20px;
}
.isArrayBox {
  border-left: solid;
}
div.container-todo {
  display: flex;
  flex-direction: column;
}

h1.todo {
  text-align: center;
  margin-bottom: 30px;
}
nav {
  position: absolute;
  top: 0;
  margin-top: 20px;
}
.todo-box {
  margin: 30px;
  padding: 20px;
  border: solid;
}
</style>
