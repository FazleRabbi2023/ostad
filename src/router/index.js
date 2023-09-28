import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import Dashboard from '../views/Dashboard.vue'
import { authStore } from '../stores/authStore'


const routes= [
    {
      path: '/',
      name: 'home',
      component: TheWelcome
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta:{
            requiresAuth: true
      }
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../components/tasks.vue'),
      meta:{
            requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('../components/Registration.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('../components/Login.vue')
    },
  ]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// const isAuthenticated = () => {
//     return localStorage.getItem('token')=='123'
// }

router.beforeEach((to, from, next) => {
    const auth = authStore()
    if(to.meta.requiresAuth && auth.isAuthenticated=='false'){
        next('/login')
    }else{
        next()
    }
})

export default router
