<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Home from './Home.vue'
import About from './About.vue'

const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <v-app>
    <Header title="Hello world"></Header>
    <v-main>
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
