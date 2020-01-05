import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';
import Clubs from '@/views/Clubs.vue';
import Author from '@/views/Author.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.loaded) next();
      if (store.state.user.loggedIn) next('/dashboard');
      else next();
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.state.loaded) next();
      if (store.state.user.loggedIn) next();
      else next('/');
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Clubs,
      },
      {
        path: 'author/:id',
        name: 'authors',
        component: Author,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
