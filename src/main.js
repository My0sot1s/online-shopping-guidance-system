import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.less';
import 'vant/lib/button/style/less';
import 'vant/lib/index.css'
import "font-awesome/css/font-awesome.css"
import 'animate.css'
import store from './assets/store/index.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vant)

new Vue({
  render: h => h(App),
  store:store,
  router:router
}).$mount('#app')
