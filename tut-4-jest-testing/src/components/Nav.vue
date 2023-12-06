<template>
  <div class="hello">
    <a href="" id="home">Home</a>
    <a href="" v-if="isLogged" id="profile">Profile</a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isLogged: false
    }
  },
}
</script>

