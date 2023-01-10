import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";
import Works from "@/pages/Works.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/works", name: "Works", component: Works },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
