import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/default',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'HomeView',
          component: () => import('@/views/HomeView.vue'),
        }
      ]
    }
  ],
})

export default router
