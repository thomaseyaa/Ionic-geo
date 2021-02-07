import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs'
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/communes'
      },
      {
        path: 'communes',
        component: () => import('@/views/Communes.vue')
      },
      {
        path: 'departements',
        component: () => import('@/views/Departements.vue')
      },
      {
        path: 'regions',
        component: () => import('@/views/Regions.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
