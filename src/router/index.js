import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Faq from '../Faq.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router