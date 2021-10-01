import Vue from 'vue'
import VueRouter from 'vue-router'
import Check from '../views/Check.vue'
import Order from '../views/Order.vue'
import Moralis from '../views/Moralis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/check',
    component: Check,
  },
  {
    path: '/Order',
    component: Order,
  },
  {
    path: '/',
    component: Moralis,
  },
]

const router = new VueRouter({
  routes,
})

export default router
