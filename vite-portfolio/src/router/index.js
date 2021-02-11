import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Builder from "../views/Builder.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "About",
    component: About,
  },
  {
    path: "/builder",
    name: "Builder",
    component: Builder,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;