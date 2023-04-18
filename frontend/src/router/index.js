import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/statuses',
      name: 'StatusIndex',
    
      component: () => import('../views/statuses/StatusIndex.vue')
    },
    {
      path: '/statuses/create',
      name: 'StatusCreate',
    
      component: () => import('../views/statuses/StatusCreate.vue')
    },
    {
      path: '/statuses/:id/edit',
      name: 'StatusEdit',
    
      component: () => import('../views/statuses/StatusEdit.vue')
    }
  ]
})

export default router
