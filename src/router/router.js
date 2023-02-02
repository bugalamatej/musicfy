import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/loading.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/pages/main.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/search.vue')
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router