// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"; // 👈 임포트 추가

// Bootstrap CSS 임포트
import "bootstrap/dist/css/bootstrap.css";
// Bootstrap JavaScript 번들 임포트
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedState); // 👈 플러그인 적용

app.use(router);
app.use(pinia);
app.mount("#app");
