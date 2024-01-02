<script setup lang="ts">
import { ref } from 'vue';

const pokemans = ref([])

async function getPokeman() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const pokemon = await data.json()
  console.log(pokemon);
  pokemans.value = pokemon.results;
}
</script>

<template>
  <button @click="getPokeman">Get pokemans</button>

  <div v-for="pokemon in pokemans" :key="pokemon.id">
    {{ pokemon.name }}
  </div>
</template>