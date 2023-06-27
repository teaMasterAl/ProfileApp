<template>
  <div class="profile-add-form">
    <FileUpload v-model="imageSrc" />
    <input type="text" placeholder="Имя" v-model="name" />
    <input type="text" placeholder="Отчество" v-model="patronymic" />
    <input type="text" placeholder="Фамилия" v-model="surname" />
    <button @click="sendData">+ Добавить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile'
import FileUpload from '@/kit/FileUpload.vue'

const imageSrc = ref('')
const name = ref('')
const patronymic = ref('')
const surname = ref('')

const profileStore = useProfileStore()

const sendData = () => {
  const dataProfile = {
    name: name.value,
    patronymic: patronymic.value,
    surname: surname.value,
    imageSrc: imageSrc.value
  }
  profileStore.saveProfile(dataProfile)
}
</script>

<style scoped>
.profile-add-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #c4c4c4;
  padding: 16px;
}
</style>
