// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('useProfileStore', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  function saveProfile( dataProfile ) {
    localStorage.setItem('profiles', JSON.stringify(dataProfile))
  }

  return { saveProfile }
})
