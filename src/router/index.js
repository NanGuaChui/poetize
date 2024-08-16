import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/layout/LayoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/love',
        name: 'love',
        component: () => import('@/views/love/LoveView.vue')
      },
      {
        path: '/travel',
        name: 'travel',
        component: () => import('@/views/travel/TravelView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
