import { createApp } from 'vue'
import App from './App.vue'
import firebaseMessaging from './firebase'

import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.$messaging = firebaseMessaging

app.mount('#app')
