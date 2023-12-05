<template>
  <div>
    <h1>Learn vue testing</h1>

    <ul>
      <li v-for="(todo, index) in todos" :key="index" data-test="todo">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "Learn vue testing",
          completed: false,
        }
      ]
    }
  },
}
</script>

