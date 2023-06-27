<template>
  <div class="profile">
    <img
     v-if="profileStore.imageSrc" 
     class="profile__image"
     :src="profileStore.imageSrc" />
    <div>
      Имя: {{ profileStore.name }}
    </div>
    <div>
      Отчесвто: {{ profileStore.patronymic }}
    </div>
    <div>
      Фамилия: {{ profileStore.surname }}
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()
</script>

<style scoped>
.profile{
  background-color: #eee;
  padding: 25px 31px;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
}
.profile__image {
  width: 100px;
  height: 100px;
}
</style>
