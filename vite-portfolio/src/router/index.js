import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Stage1 from "../stages/Stage1.vue";

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
    path: "/stage-1",
    name: "Stage1",
    component: Stage1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;