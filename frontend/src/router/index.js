import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StatsDetailView from "../views/StatsDetailView.vue";
import GameListView from "../views/GameListView.vue";
import GlossaryView from "../views/GlossaryView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/stats", name: "StatsDetail", component: StatsDetailView },
  { path: "/games", name: "GameList", component: GameListView },
  { path: "/glossary", name: "Glossary", component: GlossaryView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
