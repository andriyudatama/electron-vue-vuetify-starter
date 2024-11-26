<template>
  <v-responsive class="fill-height justify-center align-center">
    <v-container class="d-flex justify-center">
      <v-img src="assets/vue.svg" max-width="150" class="mr-8"></v-img>
      <v-img src="assets/vite.svg" max-width="150" class="mr-8"></v-img>
      <!-- <v-img src="assets/vuetify.svg" max-width="150"></v-img> -->
    </v-container>
    <v-container class="d-flex flex-column text-center justify-center">
      <div class="text-h4 font-weight-bold">
        Electron + Vue + Vuetify Starter
      </div>
      <v-card class="mt-4">
        <v-card-text>
          <div>
            This is a starter template powered with Vue and Vuetify for Electron projects. <br>
            This starter template is preinstalled with Vue Router.
          </div>
          <div class="">
            <div class="text-overline text-uppercase">Development</div>
            <pre>yarn dev</pre>
            <div class="text-overline text-uppercase">Build</div>
            <pre>yarn build</pre>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-responsive>
</template>