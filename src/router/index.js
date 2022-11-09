import { createRouter, createWebHistory } from 'vue-router'
import AnalysisView from '../views/AnalysisView.vue'
import MagazineView from '../views/MagazineView.vue'
import MagazinePageView from '../views/MagazinePageView.vue'
import SearchView from '../views/SearchView.vue'
import LoginView from '../views/LoginView.vue'
import chartTest22 from '../components/chartTest22.vue'
import chart from '../components/chart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AnalysisView
  },
  {
    path: '/magazine',
    name: 'MagazineView',
    component: MagazineView
  },
  {
    path: "/magazine/:id",
    name: "magazinePageView",
    component: MagazinePageView,
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/chartTest22',
    name: 'chartTest22',
    component: chartTest22
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  sensitive: true,
})

export default router
