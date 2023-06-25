<template>
  <nav class="menu">
    <RouterLink class="menu__link" to="/">Home</RouterLink>
    <RouterLink class="menu__link" to="/profile">Profile</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useProfileStore } from './stores/profile'

const profileStore = useProfileStore()

onMounted(() => {
  profileStore.initProfile()
})
</script>

<style>
  body{
    font-family: "PT Sans", "Arial", sans-serif;
    margin: 0;
  }
  a{
    text-decoration: none;
  }

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
