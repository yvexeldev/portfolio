import { createRouter, createWebHistory } from 'vue-router';
import HeroView from '@/views/HeroView.vue';
import NotFound from '@/views/NotFound.vue';
import ComingSoon from '@/views/ComingSoon.vue';
import Resume from '@/components/resume/Resume.vue';
import Contact from '@/components/contact/Contact.vue';

const router = createRouter({
    linkActiveClass: '!bg-clip-text !text-transparent !bg-gradient-to-r !from-green-400 !font-bold !to-blue-400 ',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'header',
            component: HeroView,
        },
        {
            path: '/',
            name: 'home',
            component: HeroView,
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
            path: '/contact',
            component: Contact,
        },

        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
        },
    ],
});

export default router;
