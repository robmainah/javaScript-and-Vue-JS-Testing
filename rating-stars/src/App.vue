<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Rating />
</template>

<script>
import Rating from './components/Rating.vue'

export default {
  name: 'App',
  components: {
    Rating
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
