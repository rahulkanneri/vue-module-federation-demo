import { createRouter, createWebHistory } from 'vue-router'

import Login from 'auth/Login';
import Signup from 'auth/Signup';

const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/signup",
        component: Signup,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;