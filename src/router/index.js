import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home";
import Login from "@/views/login";
import NotFound from "@/views/notfound";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
