import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Friend from './views/friend'
import Cart from './views/cart'
import Search from './views/search'
import Newslist from './views/home/newslist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/friend',
      component: Friend
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: Newslist
    }
  ]
})
