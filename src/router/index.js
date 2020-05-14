import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'
import Category from 'views/category/Category'
import Cart from 'views/cart/Cart'
import Profile from 'views/profile/Profile'

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
