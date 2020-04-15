// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import http from './utils/http'
import Vue from 'vue'
import Root from './root'
import router from './router'
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import VueiClient from '@supermap/vue-iclient-leaflet'
Vue.use(VueiClient)
// 引入自定义样式
import './assets/scss/resetVant.scss'
import './assets/js/size.js'

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$toast = Toast

setTimeout(() => {
  new Vue({
    router,
    render: h => h(Root)
  }).$mount('#app')
}, 200)
