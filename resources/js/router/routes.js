import { createRouter, createWebHistory } from 'vue-router'

import App from '../components/App.vue'
import Login from '../components/Login.vue'

export default createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: App
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path:  '/register'
        }
    ]
})