import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugin/vuetify'

const app = createApp(App)

app.use(vuetify, router).mount('#app')