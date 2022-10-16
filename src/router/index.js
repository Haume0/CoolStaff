import { createRouter, createWebHistory } from 'vue-router'
import home from '../routes/home.vue'
import community from '../routes/community.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home,
        },
        {
            path: '/community',
            component: community,
        },
    ]
})
export default router
