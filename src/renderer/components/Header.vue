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
    <!-- <v-tool-bar
      :title="title"
      color="grey-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,0)"
        ></v-img>
      </template>
      <v-btn href="#/">Home</v-btn>  
      <v-btn href="#/about">About</v-btn>  
    </v-tool-bar> -->
    <!-- <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer> -->
    <!-- <v-navigation-drawer 
      v-model="drawer"
      rail
    >
      <v-list-item 
        title="My Application" 
        subtitle="Vuetify"
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Home" href="#/"></v-list-item>
      <v-list-item link title="About" href="#/about"></v-list-item>
      <v-list-item link title="Not Found"></v-list-item>
    </v-navigation-drawer> -->



    <v-navigation-drawer
      expand-on-hover
      rail
      permanent
      @click="rail = false"
      color="blue-lighten-2"
      image="https://picsum.photos/seed/dfgcvhdfgh/1920/1080"
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
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" href="#/"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="About" value="about" href="#/about"></v-list-item>
        <!-- <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item> -->
      </v-list>
    </v-navigation-drawer>


  </v-container>
</template>