import { createRouter, createWebHistory } from 'vue-router'
import UploadPage from "@/views/UploadPage.vue";
import PanelPage from "@/views/PanelPage.vue";
import OpenTicket from "@/views/OpenTicket.vue";
import EditTicket from "@/views/EditTicket.vue";

const routes = [
  {
    path: '/',
    redirect: '/panel',
  },
  {
    path: '/upload',
    component: UploadPage
  },
  {
    path: '/tasks',
    component: PanelPage
  },
  {
    path: '/newticket',
    component: OpenTicket
  },
  {
    path: '/tasks/:id/edit',
    component: EditTicket,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
