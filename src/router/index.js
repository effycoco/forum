import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import NotFound from "@/components/PageNotFound.vue";
import { createRouter, createWebHistory } from "vue-router";
import srcData from "@/data.json";
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
    beforeEnter(to, from, next) {
      // check if thread exits
      const threadExits = srcData.threads.find(
        (thread) => thread.id === to.params.id
      );
      // if it exits continue
      if (threadExits) {
        return next();
      } else {
        // if not redirect to not found
        next({
          name: "NotFound",
          // break the active path to an array
          // an pass it as the value of the pathMatch parameter to the NotFound page
          params: { pathMatch: to.path.substring(1).split("/") },
          // preserve existing query and hash
          query: to.query,
          path: to.path,
        });
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
// create the router instance and pass the routes option
export default createRouter({
  // 与createWebHashHistory区别是 '/' vs '/#/'
  // this setting might require some configuration when you deploy to a server
  history: createWebHistory(),
  routes,
});
