import { defineStore } from 'pinia'

export const useProfileStore = defineStore('useProfileStore', () => {

  function saveProfile( dataProfile ) {
    localStorage.setItem('profile', JSON.stringify(dataProfile))
    alert('Профиль создан')
  }

  return { saveProfile }
  
})
