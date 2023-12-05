<template>
  <div>
    <h1>Learn vue testing</h1>

    <ul>
      <li v-for="(todo, index) in todos" :key="index" data-test="todo">
        {{ todo.text }}
      </li>
    </ul>
    <form @submit.prevent="createTodo" data-test="form">
      <input data-test="new-todo" v-model="newTodo" type="text" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn vue testing",
          completed: false,
        }
      ]
    }
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: true,
      })
    }
  },
}
</script>

