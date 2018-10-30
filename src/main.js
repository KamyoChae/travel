// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import '../src/assets/style/reset.css'
import '../src/assets/style/border.css'
import '../src/assets/style/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper )
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
