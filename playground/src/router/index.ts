import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/relay'
  },
  {
    path: '/relay',
    component: () => import('../components/relay.vue')
  },
  {
    path: '/relayDetail/:id',
    component: () => import('../components/relayDetail.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
