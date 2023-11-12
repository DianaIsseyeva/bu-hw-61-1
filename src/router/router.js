import BlockPage from '@/pages/BlockPage';
import MainPage from '@/pages/MainPage';
import TxPage from '@/pages/TxPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/block/:blockNumberOrHash',
    component: BlockPage,
  },
  {
    path: '/transaction/:txHash',
    component: TxPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
