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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/contact.vue')
  },
  {
    path: '/fav',
    name: 'Fav',
    component: () => import('@/pages/fav.vue')
  },

  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/pages/quiz.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router