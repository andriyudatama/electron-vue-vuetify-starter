<script setup>
import Header from './components/Header.vue'
window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <v-app>
    <v-main>
      <Header></Header>
      <RouterView/>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
