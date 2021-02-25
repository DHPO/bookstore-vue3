import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import BookDetail from "../views/Book.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/book/:id",
    component: BookDetail
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
