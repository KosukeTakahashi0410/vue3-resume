// refs: https://quasar.dev/start/vite-plugin#using-quasar
// FILE: main.js

import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";

const myApp = createApp(App);

myApp.mount("#app");
