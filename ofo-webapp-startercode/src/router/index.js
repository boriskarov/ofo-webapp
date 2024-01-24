import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UploadPage from "@/views/UploadPage.vue";
import PanelPage from "@/views/PanelPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/upload',
    component: UploadPage
  },
  {
    path: '/panel',
    component: PanelPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
