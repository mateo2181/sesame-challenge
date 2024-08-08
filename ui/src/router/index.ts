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
      path: '/vacancies',
      name: 'vacancies',
      component: () => import('../views/VacanciesView.vue'),
      meta: { title: 'Reclutamiento' },
    }
  ]
})

export default router
