import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import AboutMe from "@/slides/AboutMe.vue";
import Agenda from "@/slides/Agenda.vue";
import Intro from "@/slides/Intro.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Intro",
    component: Intro
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export const slideOrder = [
  'Intro',
  'AboutMe',
  'Agenda',
];

export const getNextSlide = (currentSlide: string): string => {
  const currentIndex = slideOrder.indexOf(currentSlide);
  return slideOrder[currentIndex + 1];
}

export const getPreviousSlide = (currentSlide: string): string => {
  const currentIndex = slideOrder.indexOf(currentSlide);
  return slideOrder[currentIndex - 1];
}

export default router;
