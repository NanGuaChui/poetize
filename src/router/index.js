import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/layout/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        }
      ]
    }
  ]
})

export default router
