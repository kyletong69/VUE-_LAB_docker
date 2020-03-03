import Vue from 'vue'
import App from './App.vue'
import '@/assets/scss/base.scss'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vant/lib/index.css'
import { sync } from 'vuex-router-sync'
// require styles
import 'swiper/dist/css/swiper.css'

sync(store, router) // done. Returns an unsync callback fn
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
