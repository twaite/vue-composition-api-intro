import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Intro from "../slides/Intro.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Intro",
    component: Intro
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
