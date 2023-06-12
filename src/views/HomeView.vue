<template>
  <div>
    <img :src="imageSrc">
    <div>
      {{name}}
    </div>
    <div>
      {{patronymic}}
    </div>
    <div>
      {{surname}}
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted, ref } from "vue"

const imageSrc = ref('')
const name = ref('')
const patronymic = ref('')
const surname = ref('')

onMounted(() => {
   const data = localStorage.getItem('profiles')
   const profile = JSON.parse(data)
   
   imageSrc.value = profile.imageSrc
   name.value = profile.name
   patronymic.value = profile.patronymic
   surname.value = profile.surname
})

</script>

<style scoped>
 img{
  width: 100px; 
  height: 100px;
 }
</style>