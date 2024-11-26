<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <v-responsive class="fill-height justify-center align-center">
    <v-row class="d-flex justify-center flex-wrap">
      <v-col cols="4">
        <v-card>
          <v-card-title>Congratulations</v-card-title>
          <v-img src="https://picsum.photos/400/300"></v-img>
          <v-card-text>
            You have already installed Electron + Vue + Vuetify. This is a template to build desktop app quickly and easily.
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="count++">Click ({{ count }})</v-btn>
            <v-btn color="error">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<style scoped>
</style>
