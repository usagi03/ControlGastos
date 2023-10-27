import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import vuetify from './plugin/vuetify'
import 'vuetify/dist/vuetify.min.css'


const app = createApp(App)

app.use(vuetify),
app.use(router),
app.mount('#app')