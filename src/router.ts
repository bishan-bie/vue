import { createMemoryHistory, createRouter } from "vue-router";

import Index from "./list/index.vue";
import Layout from "@/components/layout/index.vue";

const routes = [
  { path: "/", redirect: "list" },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/list",
        component: Index,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
