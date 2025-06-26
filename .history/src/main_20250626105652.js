// import vue and pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createBootstrap } from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// import app  and router component
import App from './App.vue'
import router from './router'

//import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// import localStorage plugin
import { localStoragePlugin } from './stores/plugins/localStoragePlugin'

// import scss
import '@/assets/scss/main.scss'

//create app
const app = createApp(App)

// ✅ create pinia instance and use plugin
const pinia = createPinia()
pinia.use(localStoragePlugin) // register plugin before app.use()

// use Pinia, router and bootstrap
app.use(pinia)
app.use(router)
app.use(createBootstrap())

//mount app
app.mount('#app')
