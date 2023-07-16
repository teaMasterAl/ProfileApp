<template>
  <div class="profile">
    <img
     v-if="profileStore.imageSrc" 
     class="profile__image"
     :src="profileStore.imageSrc"
     alt="avatar"
    />
    <div>
      Имя: {{ profileStore.name }}
    </div>
    <div>
      Отчество: {{ profileStore.patronymic }}
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
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
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
