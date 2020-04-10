import Vue from 'vue'
import Router from 'vue-router'
import { routes as auth } from '../modules/auth'
import { routes as home } from '../modules/home'
import { routes as vdata } from '../modules/vdata'
import { routes as me } from '../modules/me'
import { routes as map } from '../modules/map'
import { routes as video } from '../modules/video'

Vue.use(Router)

const AppRoute = {
  path: '/',
  component: () =>
    import('../app'),
  children: [...auth, ...home, ...vdata, ...me, ...map, ...video]
}

const routes = [AppRoute]



const router = new Router({
  routes,
  // mode: 'history',
})

export default router