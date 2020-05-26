import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'


Vue.config.productionTip = false
//注册时间总线
Vue.prototype.$bus = new Vue();

//安装toast插件
Vue.use(toast)
//安装lazyload
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
