import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/views/Home/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Home/About.vue'),
    },
  ],
});

export default router;
