import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize the Vue 3 app
const app = createApp(App)

// Initialize AOS
AOS.init()

// Mount the app to the DOM
app.mount('#app')
