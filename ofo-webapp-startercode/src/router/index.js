import { createRouter, createWebHistory } from 'vue-router'
import UploadPage from "@/views/UploadPage.vue";
import PanelPage from "@/views/PanelPage.vue";
import OpenTicket from "@/views/OpenTicket.vue";
import EditTicket from "@/views/EditTicket.vue";
import BacklogPage from "@/views/BacklogPage.vue";

const routes = [
  {
    path: '/',
    redirect: '/tasks',
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
  },
  {
    path: '/log',
    component: BacklogPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
