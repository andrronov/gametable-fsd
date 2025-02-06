import "@/shared/assets/base.css";

import { createPinia } from "pinia";
import { createHead } from "unhead";
import { createApp } from "vue";
import App from "../src/app/App.vue";
import { router } from "./app/router/routes";

const pinia = createPinia();
const head = createHead();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
