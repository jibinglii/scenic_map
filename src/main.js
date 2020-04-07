// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import http from './utils/http'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueiClient from '@supermap/vue-iclient-leaflet';
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
Vue.use(VueiClient);
// 引入自定义样式
import './assets/scss/resetVant.scss'
import './assets/js/size.js'

Vue.config.productionTip = false

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
// require('vue-video-player/node_modules/video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
Vue.prototype.$http = http
Vue.prototype.$toast = Toast

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
