import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const DefaultContainer = () => import('@/app/common/components/DefaultContainer.vue');
// Rutas para desarrollo
const Dashboard = () => import('@/app/modules/dashboard/components/Dashboard.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'dev/dashboard',
    component: DefaultContainer,
    children: [
      {
        path: 'dev',
        name: 'dev',
        redirect: 'dev/dashboard',
        component: {
          render(c) {
            return c('router-view');
          },
        },
        children: [
          {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard,
          },
        ],
      },
      {
        path: 'test',
        name: 'test',
        component: {
          render(c) {
            return c('router-view');
          },
        },
        children: [],
      },
      {
        path: 'sent',
        name: 'sent',
        component: {
          render(c) {
            return c('router-view');
          },
        },
        children: [],
      },
    ],
  },
  {
    path:
      '/about',
    name:
      'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:
      () => import(/* webpackChunkName: "about" */ '@/app/common/views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  routes,
});

export default router;
