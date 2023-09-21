import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../components/products.vue'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'ProductProfile',
      component:()=>import ('../components/ProductProfile.vue')
    },
    {
      path: '/user/:username',
      name: 'UserProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/UserProfile.vue')
    }
  ]
})

export default router
