import { createMemoryHistory, createRouter } from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router