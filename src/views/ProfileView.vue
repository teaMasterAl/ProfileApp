<template>
  <div>
    <input type="file" @change="onFileSelected">
    <input type="text" placeholder="Имя" v-model="name">
    <input type="text" placeholder="Отчество" v-model="patronymic">
    <input type="text" placeholder="Фамилия" v-model="surname">
    <button @click="sendData">+ Добавить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from "@/stores/profile";

const imageSrc = ref('')
const name = ref('')
const patronymic = ref('')
const surname = ref('')

const profileStore = useProfileStore()

const onFileSelected = (event) => {
  const file = event.target.files[0]

  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.onload = () => {
    imageSrc.value = reader.result
  }
}

const sendData = () => {
 const dataProfile = {
  name: name.value,
  patronymic: patronymic.value,
  surname: surname.value,
  imageSrc: imageSrc.value,
 }
 profileStore.saveProfile(dataProfile)
}

</script>

<style scoped>

img{
  width: 100px;
  height: 100px;
}

</style>