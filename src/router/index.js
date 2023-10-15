import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

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
      path: '/view',
      name: 'Viewpoll',
      component: () => import('../views/ViewPoll.vue')
    },
    {
      path: '/createpoll',
      name: 'createpoll',
      component: () => import('../views/createPoll.vue'),
      meta: {requiresAuth: true}
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser
  const isAuthRequired = to.matched.some(record => 
      record.meta.requiresAuth )

      if (!isAuthenticated  && isAuthRequired) next({ name: 'login'})
      else next()
})



export default router
