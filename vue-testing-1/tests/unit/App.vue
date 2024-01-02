<template>
  <div>
    <button @click="increment"></button>
      <div v-if="count % 2 === 0">
        Count: {{ count }}. Count is even
      </div>
      <div v-else>
        Count: {{ count }}. Count is odd
      </div>

      <Fetcher />
  </div>
</template>

<script>
import { computed, inject, ref } from 'vue';
import { useStore } from 'vuex';
import Fetcher from './Fetcher.vue';

import axios from 'axios';

export default {
  components: {
    Fetcher
  },
  setup() {
    // const store = useStore()
    const store = inject('store')
    const count = computed(() => store.state.count)

    const increment = () => {
      store.commit('increment')
    }

    return {
      count,
      increment
    }
  }
}
</script>