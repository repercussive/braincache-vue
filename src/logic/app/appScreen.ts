import { readonly, ref } from 'vue'

export type AppScreen = 'welcome' | 'game' | 'game-end'

const current = ref<AppScreen>('welcome')

function set(screen: AppScreen) {
  current.value = screen
}

export default {
  get current() { return readonly(current).value },
  set
}