import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/login",
        component: () => import('../views/login/Index.vue'),
    },
    {
        path: "/signup",
        component: () => import('../views/signup/Index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;