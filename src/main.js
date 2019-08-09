import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './icons'
import create from '@/utils/create'
import router from '@/router'

Vue.config.productionTip = false

Vue.prototype.$create = create

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
