import Vue from 'vue'
import VueRouter from 'vue-router'
import Check from '../views/Check.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/check',
    component: Check,
  },
  {
    path: '/',
    component: Order,
  },
]

const router = new VueRouter({
  routes,
})

export default router
