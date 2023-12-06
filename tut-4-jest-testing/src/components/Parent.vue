<template>
  <div class="hello">
    <!-- Parent -->
    <Child />
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: 'ParentApp',
  data() {
    return {
      isLogged: false
    }
  },
  components: {
    Child
  }
}
</script>

