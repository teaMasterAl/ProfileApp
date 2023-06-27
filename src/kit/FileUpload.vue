<template>
  <label class="upload">
    <img v-if="modelValue" class="upload__image" :src="modelValue" alt="avatar">
    <img v-else class="upload__image" src="@/assets/user-plus-solid.svg" alt="avatar default" />
    <input @change="onFileSelected" type="file" class="upload__input" />
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

const onFileSelected = (event) => {
  const file = event.target.files[0]

  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.onload = () => {
    emit('update:modelValue', reader.result)
  }
}
</script>

<style scoped>
.upload__image {
  display: inline-block;
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.upload__input {
  display: none;
}
</style>
