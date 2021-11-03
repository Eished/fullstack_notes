import Vue from 'vue'
import VueRouter from 'vue-router'
import Check from '../views/Check.vue'
import Order from '../views/Order.vue'
import Moralis from '../views/Moralis.vue'
import Chartjs from '../views/Chartjs.vue'
import PapaParse from '../views/PapaParse.vue'
import Firebase from '../views/Firebase.vue'

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
  {
    path: '/Chartjs',
    component: Chartjs,
  },
  {
    path: '/PapaParse',
    component: PapaParse,
  },
  {
    path: '/Firebase',
    component: Firebase,
  },
]

const router = new VueRouter({
  routes,
})

export default router
