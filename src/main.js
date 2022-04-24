import { createApp } from "vue";
import App from "./App.vue";
import PageHome from "@/components/PageHome.vue";

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
];
// create the router instance and pass the routes option
const router = createRouter({
  // 与createWebHashHistory区别是 '/' vs '/#/'
  // this setting might require some configuration when you deploy to a server
  history: createWebHistory(),
  routes,
});

const forumApp = createApp(App);
// use the router instance
forumApp.use(router);
forumApp.mount("#app");
