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
      path: '/join',
      name: 'join',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JoinRace.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateRaceTrack.vue')
    },
    {
      path: '/race/:code',
      name: 'race',
      component: () => import('../views/RaceTrack.vue')
    }
  ]
})

export default router
