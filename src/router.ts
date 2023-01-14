import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Works from "@/pages/Works.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/works", name: "works", component: Works },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
