<template>
  <div class="theme" :class="themeName">
    <div>
      <span>Тема: </span>
      <button @click="toggleTheme">{{themeButtonText}}</button>
    </div>
    <nav class="menu">
      <RouterLink class="menu__link" to="/">Home</RouterLink>
      <RouterLink class="menu__link" to="/profile">Profile</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {computed, onMounted, ref} from 'vue'
import { useProfileStore } from './stores/profile'

const themeName = ref('light')

const themeButtonText = computed(() => themeName.value === 'light'? 'Тёмная' : 'Светлая')
const toggleTheme = () => {
  themeName.value = themeName.value === 'light'? 'dark' : 'light'
}

const profileStore = useProfileStore()

onMounted(() => {
  if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeName.value = 'dark'
  }

  profileStore.initProfile()
})
</script>

<style>
  .menu{
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .menu__link{
    color: #10a25e;
    font-size: 17px;
    letter-spacing: 1px;
  }
</style>
