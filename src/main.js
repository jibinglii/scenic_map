// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueiClient from '@supermap/vue-iclient-leaflet';
Vue.use(VueiClient);
// 引入自定义样式
import './assets/scss/resetVant.scss'
import './assets/js/size.js'

Vue.config.productionTip = false



// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
