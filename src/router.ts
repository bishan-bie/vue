import { createMemoryHistory, createRouter } from "vue-router";

import Index from "./list/index.vue";
import Layout from "@/components/layout/index.vue";

const routes = [
  { path: "/", redirect: "index" },
  {
    path: "/index",
    component: Layout,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: "profile",
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
