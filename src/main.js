import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import MainComponent from "@/components/MainComponent.vue";


const routes = [
    { path: '/', component: MainComponent },
    { path: '/about', component: MainComponent },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
