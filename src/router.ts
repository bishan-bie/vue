import { createMemoryHistory, createRouter } from 'vue-router'

import Index from './list/index.vue'

const routes = [
  { path: '/index', component: Index },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router