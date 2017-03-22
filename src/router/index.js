import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,

        },
        // {
        //     path: '*',
        //     component: NotFound
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/User',
            name: 'User',
            component: User
        }
    ]
})