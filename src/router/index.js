// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/HomeView'; // Make sure the component is exported with 'export default'
import FirstQuestion from '@/components/FirstQuestion'; // Make sure the component is exported with 'export default'
import SecondQuestion from '@/components/SecondQuestion';
import ThirdQuestion from '@/components/ThirdQuestion';
import FourthQuestion from '@/components/FourthQuestion';
import FifthQuestion from '@/components/FifthQuestion';
import PageForA from '@/components/PageForA';
import PageForB from '@/components/PageForB';
import PageForC from '@/components/PageForC';
import PageForD from '@/components/PageForD';


const router = createRouter({
  history: createWebHistory(), // Use `createWebHistory` for HTML5 history mode
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/1',
      name: 'FirstQuestion',
      component: FirstQuestion,
    },
    {
      path: '/2',
      name: 'SecondQuestion',
      component: SecondQuestion,
    },
    {
      path: '/3',
      name: 'ThirdQuestion',
      component: ThirdQuestion,
    },
    {
      path: '/4',
      name: 'FourthQuestion',
      component: FourthQuestion,
    },
    {
      path: '/5',
      name: 'FifthQuestion',
      component: FifthQuestion,
    },
    {
      path: '/pageForA',
      name: 'PageForA',
      component: PageForA,
    },
    {
      path: '/pageForB',
      name: 'PageForB',
      component: PageForB,
    },
    {
      path: '/pageForC',
      name: 'PageForC',
      component: PageForC,
    },
    {
      path: '/pageForD',
      name: 'PageForD',
      component: PageForD,
    }
  ],
});

export default router;
