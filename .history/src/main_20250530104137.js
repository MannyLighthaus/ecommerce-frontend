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

//create app
const app = createApp(App)

//import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// use Pinia, router and bootstrap
app.use(createPinia())

app.use(router)
app.use(createBootstrap())

import { localStoragePlugin } from './stores/plugins/localStoragePlugin'
pinia.use(localStoragePlugin)

app.mount('#app')
