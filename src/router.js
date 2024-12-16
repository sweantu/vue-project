import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue';
import Login from './Login.vue';
import Register from './Register.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
  ]
});

export default router