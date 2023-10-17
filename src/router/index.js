import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/question",
      name: "question",
      component: () => import("../views/QuestionView.vue"),
    },
    {
      path: "/tag",
      name: "tag",
      component: () => import("../views/TagSearchView.vue"),
    },
    {
      path: "/area",
      name: "area",
      component: () => import("../views/AreaSearchView.vue"),
    },
    {
      path: "/eki",
      name: "eki",
      component: () => import("../views/EkiSearchView.vue"),
    },
  ],
});

export default router;
