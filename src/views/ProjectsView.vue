<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="about">
    <h2>
      Scroll down and look through these projects, <br />
      and you might just want to
    </h2>
    <iframe
      src="https://giphy.com/embed/Tr5eaF2MxvieY"
      width="300px"
      height="300px"
      frameBorder="0"
    >
    </iframe>
  </div>

  <section>
    <h3>List of Projects</h3>
    <table>
      <tr>
        <th class="bold">Title of Vue Project</th>
        <th class="bold">Description of Vue Project</th>
        <th class="bold">Hyperlink to Project</th>
        <th class="bold">Date Completed</th>
      </tr>
      <tr>
        <td>To Do List</td>
        <td>TBD description</td>
        <td><RouterLink to="/todo">See Project</RouterLink></td>
        <td>April 2024</td>
      </tr>
    </table>
  </section>
  <RouterView />
</template>

<style>
section {
  margin-top: 40px;
  margin-bottom: 80px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th.bold {
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

h2 {
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
