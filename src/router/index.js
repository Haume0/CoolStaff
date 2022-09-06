import { createRouter, createWebHistory } from 'vue-router'
import mainMenu from '../components/mainmenu.vue'
import pg from '../components/passwordgenerator.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: mainMenu,
        },
        {
            path: '/pg',
            component: pg,
        },
    ]
})
export default router
