import { createRouter, createWebHistory } from 'vue-router'
import AnalysisView from '../views/AnalysisView.vue'
import MagazineView from '../views/MagazineView.vue'
import MagazinePageView from '../views/MagazinePageView.vue'
import SearchView from '../views/SearchView.vue'
import chartTest22 from '../components/chartTest22.vue'

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
    path: '/chartTest22',
    name: 'chartTest22',
    component: chartTest22
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
