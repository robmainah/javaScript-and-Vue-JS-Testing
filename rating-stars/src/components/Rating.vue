<template>
  <div>
    <ul>
      <li class="star" :class="{active: star <= initialActive }" v-for="(star, index) in maxStars" :key="index">{{star}}</li>
    </ul>
    <p class="summary">{{ initialActive }} of {{ maxStars }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    maxStars: {
      type: Number
    },
    initialActive: {
      type: Number
    },
  }
}
</script>