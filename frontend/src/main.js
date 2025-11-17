import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 라우터 임포트

// Bootstrap 5 라이브러리 전역 로드
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(router); // 라우터 사용
app.mount("#app");
