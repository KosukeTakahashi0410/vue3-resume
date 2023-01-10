// refs: https://quasar.dev/start/vite-plugin#using-quasar
// FILE: main.js

import { createApp } from "vue";
// import "./style.css";
import "./index.css"; //追記
import App from "@/App.vue";
import i18n from "@/languages/index";
import router from "@/router";

const myApp = createApp(App);
myApp.use(i18n);
myApp.use(router);
myApp.mount("#app");
