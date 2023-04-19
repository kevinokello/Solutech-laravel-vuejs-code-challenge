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
    },
    {
      path: '/tasks',
      name: 'TaskIndex',
    
      component: () => import('../views/tasks/TaskIndex.vue')
    },
    {
      path: '/tasks/create',
      name: 'TaskCreate',
    
      component: () => import('../views/tasks/TaskCreate.vue')
    },
    {
      path: '/tasks/:id/edit',
      name: 'TaskEdit',
    
      component: () => import('../views/tasks/TaskEdit.vue')
    },
    {
      path: '/usertasks',
      name: 'UserTaskIndex',
    
      component: () => import('../views/usertasks/UserTaskIndex.vue')
    },
    {
      path: '/usertasks/create',
      name: 'UserTaskCreate',
    
      component: () => import('../views/usertasks/UserTaskCreate.vue')
    },
    {
      path: '/usertasks/:id/edit',
      name: 'UserTaskEdit',
    
      component: () => import('../views/usertasks/UserTaskEdit.vue')
    }

  ]
})

export default router
