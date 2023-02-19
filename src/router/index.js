import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("@/views/catalog.vue"),
    meta: {
      layouts: "HeaderFooterLayout",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/components/cart/Cart.vue"),
    props: true,
    meta: {
      layouts: "HeaderFooterLayout",
    },
  },
  {
    path: "/authorization",
    name: "authorization",
    component: () => import("@/components/authorization.vue"),
    props: true,
    meta: {
      layouts: "HeaderFooterLayout",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/register.vue"),
    props: true,
    meta: {
      // layouts: 'HeaderFooterLayout'
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/components/forgot-password.vue"),
    props: true,
    meta: {
      // layouts: 'HeaderFooterLayout'
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
