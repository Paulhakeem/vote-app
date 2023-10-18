import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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


const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(),
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  const isAuthenticated = await getCurrentUser()
  const isAuthRequired = to.matched.some(record => 
      record.meta.requiresAuth )

      if (!isAuthenticated  && isAuthRequired) next({ name: 'login'})
      else next()
})



export default router
