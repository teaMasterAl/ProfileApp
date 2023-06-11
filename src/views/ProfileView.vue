<template>
  <h1>This is an profile page</h1>
  <div>this is my description</div>
  <div>{{ counterStore.count }}</div>
  <button @click="counterStore.increment">+1</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>