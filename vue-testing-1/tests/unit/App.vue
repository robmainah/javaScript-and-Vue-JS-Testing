<template>
  <div>
    <button @click="increment"></button>
      <div v-if="count % 2 === 0">
        Count: {{ count }}. Count is even
      </div>
      <div v-else>
        Count: {{ count }}. Count is odd
      </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const count = computed(() => store.state.count)

const increment = () => {
  store.commit('increment')
}
</script>