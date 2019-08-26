import Vue from 'vue'
import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Toast, Grid, GridItem, Card } from 'vant'

Vue.use(Button)
  .use(NavBar)
  .use(Tabbar).use(TabbarItem)
  .use(Swipe).use(SwipeItem)
  .use(Grid).use(GridItem)

  .use(Card)
Vue.prototype.$Toast = Toast
