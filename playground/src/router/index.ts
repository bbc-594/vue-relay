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
  {
    path: '/relayPro',
    component: () => import('../components/relayPro.vue')
  },
  {
    path: '/relayProDetail/:id',
    component: () => import('../components/relayProDetail.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
