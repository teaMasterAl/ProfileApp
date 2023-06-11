<template>
  <main>
    <h1>Hello world</h1>
    <h3>{{counterStore.count}}</h3>
    <h4>hello h4</h4>
    <button @click="counterStore.increment">+1</button>
  </main>
</template>

<script setup>
import {useCounterStore} from "../stores/counter";

const counterStore = useCounterStore()
</script>
