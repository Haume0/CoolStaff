import { createRouter, createWebHistory } from 'vue-router'
import mainMenu from '../components/anamenu.vue'
import pg from '../components/pg.vue'

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
        }
    ]
})
export default router
