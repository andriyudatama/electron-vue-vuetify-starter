import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

// Pages
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/about', component: About}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

createApp(App).use(router).use(vuetify).mount('#app')