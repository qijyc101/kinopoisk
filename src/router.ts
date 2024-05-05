import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: () => import('src/pages/HomePage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
