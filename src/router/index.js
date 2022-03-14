import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Faq from '../pages/Faq.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/faq',
        component: Faq
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router