import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import DataTableFilterDemo from '@/components/DataTableFilterDemo.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DataTableFilterDemo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
