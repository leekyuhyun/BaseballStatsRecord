import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/games",
      name: "gameList",
      component: () => import("../views/GameListView.vue"),
    },
    {
      path: "/stats",
      name: "statSummary",
      component: () => import("../views/StatSummaryView.vue"),
    },
    {
      path: "/terms",
      name: "terminology",
      component: () => import("../views/TerminologyView.vue"),
    },
    {
      path: "/record-input",
      name: "recordInput",
      component: () => import("../views/RecordInputView.vue"),
    },
  ],
});

export default router;
