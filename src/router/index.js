import { createRouter, createWebHistory } from 'vue-router'
import { Hero } from '@/components'

const router = createRouter({
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
    }
  ]
})

export default router
