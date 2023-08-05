import { createRouter, createWebHistory } from 'vue-router'
import HeaderViewVue from '../views/HeaderView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'header',
			component: HeaderViewVue
		}
	]
})

export default router
