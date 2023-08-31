import { createRouter, createWebHistory } from 'vue-router'
import LatestBlog from '../views/LatestBlog.vue'
import BlogList from '../views/BlogList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LatestBlog
    },
    {
      path: '/list',
      name: 'list',
      component: BlogList
    },
    {
      path: '/:id',
      props: true,
      name: 'blog',
      component: () => import('../views/LatestBlog.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
