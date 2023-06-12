<template>
  <div>
    <input type="file" @change="onFileSelected">
    <input type="text" placeholder="Имя" v-model="name">
    <input type="text" placeholder="Отчество" v-model="patronymic">
    <input type="text" placeholder="Фамилия" v-model="surname">
    <button @click="sendData">+ Добавить</button>

    <!-- <img :src="src"> -->

  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue'
import { createPinia } from 'pinia'
import {useProfileStore} from "../stores/profile";

const imageSrc = ref('')
const name = ref('')
const patronymic = ref('')
const surname = ref('')

const profileStore = useProfileStore()


const onFileSelected = (event) => {
  const file = event.target.files[0]
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const qwerty =  reader.result

  reader.onload = function () {
    // const base64String = reader.result;
    // localStorage.setItem('imgSrc', base64String);
    imageSrc.value = reader.result;
  };
}


const sendData = () => {
 const dataProfile = {
  name: name.value,
  patronymic: patronymic.value,
  surname: surname.value,
  imageSrc: src.value,
 }
 profileStore.saveProfile(dataProfile)
}

const src = ref(null)
onMounted(() => {
   src.value = localStorage.getItem('imgSrc')

})

// Преобразовать файл в строку base64:
// javascript
// Copy code
// const reader = new FileReader();
// reader.readAsDataURL(selectedFile);
// reader.onload = function () {
//   const base64String = reader.result;
//   localStorage.setItem('image', base64String);
// };

</script>

<style scoped>

img{
  width: 100px;
  height: 100px;
}

</style>