<template>
  <div>
    <img v-if="profileStore.imageSrc" :src="profileStore.imageSrc" />
    <div>
      {{ profileStore.name }}
    </div>
    <div>
      {{ profileStore.patronymic }}
    </div>
    <div>
      {{ profileStore.surname }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>