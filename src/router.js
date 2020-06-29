import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeView = () => import('@/views/HomeView')
const PlayersView = () => import('@/views/PlayersView')
const StatisticsView = () => import('@/views/StatisticsView')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/statistics',
    component: StatisticsView,
    name: 'statistics'
  },
  {
    path: '/players',
    component: PlayersView,
    name: 'players'
  }
]

const router = new VueRouter({
  base: '/venados-challenge/',
  mode: 'history',
  routes
})

export default router