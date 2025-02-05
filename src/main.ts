import "@/shared/assets/base.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../src/app/App.vue";
import { router } from "./app/router/routes";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");