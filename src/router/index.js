import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
  },
];
// create the router instance and pass the routes option
export default createRouter({
  // 与createWebHashHistory区别是 '/' vs '/#/'
  // this setting might require some configuration when you deploy to a server
  history: createWebHistory(),
  routes,
});
