import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board',
    name: 'SpellStore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SpellStore.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.username === store.state.permissions.username && store.state.password === store.state.permissions.password) {
        next();
      } else {
        next({ path: '/' });
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
