import { createRouter, createWebHistory } from 'vue-router'
import Credits from '../pages/credits/credits.vue'
import Home from '../pages/home/home.vue'
import Detail from '../pages/detail/detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router