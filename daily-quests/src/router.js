// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
