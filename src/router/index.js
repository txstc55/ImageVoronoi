import Vue from "vue";
import VueRouter from "vue-router";
import IV from "../views/IV.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/ImageVoronoi",
    name: "Image Voronoi",
    component: IV
  },
];

const router = new VueRouter({
  routes
});

export default router;
