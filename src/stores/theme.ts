import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const changeTheme = () => {
    const isDarkMode = localStorage.getItem('theme') === 'dark'

    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return { changeTheme }
})
