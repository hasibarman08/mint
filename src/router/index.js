import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import viewer from "../views/viewer.vue";
import attribute from "../views/attribute.vue";
import newMint from "../views/new-mint.vue";
import newView from "../views/new-view.vue";
import newAttribute from "../views/new-attribute.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
    {
    path: "/viewer",
    name: "viewer",
    component: viewer,
  },
    {
    path: "/attribute",
    name: "attribute",
    component: attribute,
  },
    {
    path: "/new-mint",
    name: "newMint",
    component: newMint,
  },
    {
    path: "/new-view",
    name: "newView",
    component: newView,
  },
    {
    path: "/new-attribute",
    name: "newAttribute",
    component: newAttribute,
  },



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
