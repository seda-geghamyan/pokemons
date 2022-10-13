import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/pokemons",
    name: "pokemons",
    // route level code-splitting
    // this generates a separate chunk (pokemons.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pokemons/index.vue"),
  },
  {
    path: "/pokemons/:id",
    name: "pokemons-id",
    // route level code-splitting
    // this generates a separate chunk (pokemons.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pokemons/id.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
