import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/:pathMatch(.*)*", component: PageNotFoundView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
