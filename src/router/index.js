import { createRouter, createWebHistory } from 'vue-router'
import AnalysisView from '../views/AnalysisView.vue'
import MagazineView from '../views/MagazineView.vue'
import MagazinePageView from '../views/MagazinePageView.vue'
import SearchView from '../views/SearchView.vue'
import chartTest from '../views/chartTest.vue'

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
    path: '/chartTest',
    name: 'chartTest',
    component: chartTest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
