import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UploadPage from "@/views/UploadPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }, {
    path: '/upload',
    name: 'upload',
    component: UploadPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
