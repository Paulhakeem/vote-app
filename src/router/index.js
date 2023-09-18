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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/createpoll',
      name: 'createpoll',
      component: () => import('../views/createPoll.vue')
    },
    {
      path: '/viewpoll',
      name: 'viewpoll',
      component: () => import('../views/viewPoll.vue')
    }
  ]
})

export default router
