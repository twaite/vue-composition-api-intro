import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import AboutMe from "@/slides/AboutMe.vue";
import Agenda from "@/slides/Agenda.vue";
import Intro from "@/slides/Intro.vue";
import Vue3 from '@/slides/Vue3.vue';
import CompositionAPI from '@/slides/CompositionAPI.vue';
import Counter from '@/slides/Counter.vue';
import Covid from '@/slides/Covid.vue';
import ReusableCode from '@/slides/ReusableCode.vue';
import Resources from '@/slides/Resources.vue';

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
  {
    path: "/vue-3",
    name: "Vue3",
    component: Vue3
  },
  {
    path: "/composition-api",
    name: "CompositionAPI",
    component: CompositionAPI
  },
  {
    path: "/counter-example",
    name: "Counter",
    component: Counter
  },
  {
    path: "/covid-example",
    name: "Covid",
    component: Covid
  },
  {
    path: "/reusable-example",
    name: "Reusable",
    component: ReusableCode
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const slides = routes.map(r => r.name || '');

export const getNextSlide = (currentSlide: string): string => {
  const currentIndex = slides.indexOf(currentSlide);
  return slides[currentIndex + 1];
}

export const getPreviousSlide = (currentSlide: string): string => {
  const currentIndex = slides.indexOf(currentSlide);
  return slides[currentIndex - 1];
}

export default router;
