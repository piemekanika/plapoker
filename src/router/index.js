import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/s/auth',
    },
    {
        path: '/s/:sessionId',
        name: 'User session',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/session.vue'),
    },
    {
        path: '/s/:sessionId/auth',
        name: 'User auth',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/user-auth.vue'),
    },
    {
        path: '/admin/auth',
        name: 'Admin auth',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/admin-auth.vue'),
    },
    {
        path: '/admin/sessions',
        name: 'View sessions',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/sessions.vue'),
    },
    {
        path: '/admin/session/edit/:sessionId',
        name: 'Edit session',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/session-edit.vue'),
    },
    {
        path: '/admin/session/create',
        name: 'Create session',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/session-create.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
