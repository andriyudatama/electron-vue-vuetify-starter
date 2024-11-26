<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
})

const drawer = ref(true)
const rail = ref(true)
</script>

<template>
  <v-container>
    <v-app-bar density="compact">
      <v-app-bar-title>Electron + Vue + Vuetify Starter</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      expand-on-hover
      rail
      permanent
      @click="rail = false"
    >
      <!-- <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Andri Yudatama"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider> -->

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="About" value="about" to="/about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>