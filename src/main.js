import "../src/assets/scss/app.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import mixins from "./mixins";

createApp(App).use(store).use(mixins).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
