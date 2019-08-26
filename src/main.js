import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'

// 引入axios
import axios from 'axios'
// 配置根路径
axios.defaults.baseURL = 'http://127.0.0.1:5000'
// 配置全局的axios  以后就不需要一个一个引入
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
