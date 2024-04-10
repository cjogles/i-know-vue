<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container-todo">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/projects">Projects</RouterLink>
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
</template>

<style>

div#app {
  display: flex;
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
  top:0;
  margin-top: 20px;
}
</style>
