import { defineStore } from 'pinia'
import { ref } from "vue";

export const useProfileStore = defineStore('useProfileStore', () => {

  const imageSrc = ref('')
  const name = ref('')
  const patronymic = ref('')
  const surname = ref('')

  const initProfile = () => {
    const data = localStorage.getItem('profile')
    if (!data) return
    const profile = JSON.parse(data)

    imageSrc.value = profile.imageSrc
    name.value = profile.name
    patronymic.value = profile.patronymic
    surname.value = profile.surname
  }

  function saveProfile(dataProfile) {
    localStorage.setItem('profile', JSON.stringify(dataProfile))
    alert('Профиль создан')

    imageSrc.value = dataProfile.imageSrc
    name.value = dataProfile.name
    patronymic.value = dataProfile.patronymic
    surname.value = dataProfile.surname
  }

  return { imageSrc, name, patronymic, surname, initProfile, saveProfile }

})
