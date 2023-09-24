import { createRouter, createWebHistory } from 'vue-router'
import { Hero, About, Resume } from '@/components'
import Contact from "@/components/Contact.vue";

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home2',
      component: Hero
    },
    {
      path: '/home',
      name: 'home',
      component: Hero
    },
    {
      path: '/contact',
      component: Contact,
      name: 'contact'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/resume',
      component: Resume,
      name: 'resume'
    }
  ]
})

export default router
