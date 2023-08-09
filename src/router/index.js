import { createRouter, createWebHistory } from 'vue-router';
import HeaderViewVue from '../views/HeaderView.vue';
import NotFound from '@/views/NotFound.vue';
import ComingSoon from '@/views/ComingSoon.vue';
import Resume from '@/components/resume/Resume.vue';

const router = createRouter({
    linkActiveClass: 'dark:!text-primary !text-primary-hover',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'header',
            component: HeaderViewVue,
        },
        {
            path: '/',
            name: 'home',
            component: HeaderViewVue,
        },
        {
            path: '/blog',
            component: ComingSoon,
            // FIXME: FIX AFTER CREATING BLOG COMPONENT!
        },
        {
            path: '/resume',
            component: Resume,
        },
        {
            path: '/about',
            component: ComingSoon,
            // FIXME: FIX AFTER CREATING ABOUT COMPONENT!
        },
        {
            path: '/contact',
            component: ComingSoon,
            // FIXME: FIX AFTER CREATING CONTACT COMPONENT!
        },

        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
        },
    ],
});

export default router;
