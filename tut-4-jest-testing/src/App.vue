<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Nav />
  <TodoApp />
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    TodoApp,
    Nav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
