import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shop',
      name: 'shop',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShopView.vue'),
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',

      component: () => import('../components'),
    },
  ],
})

export default router
