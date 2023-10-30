import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Gastos from '../views/GastosView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/gastos',
      component: Gastos,
    },
  ]
})

export default router
