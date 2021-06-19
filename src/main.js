import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
//import VueLazyLoad from 'vue-lazyload'

require('../src/assets/icon/iconfont')

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)
//Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
