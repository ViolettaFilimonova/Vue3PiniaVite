import { createApp } from 'vue'
import './style.css'
import * as App from './App.vue'
import { createPinia } from 'pinia'


const pinia = createPinia()



createApp(App).use(pinia).mount('#app')
