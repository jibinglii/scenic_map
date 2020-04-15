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

router.beforeEach((to, from, next) => {
  console.log(to.meta.requiresAuth)
  // if (to.path === '/login') {
  //   next();
  // } else {
  //   let token = localStorage.getItem('Authorization');

  //   if (token === 'null' || token === '') {
  //     next('/login');
  //   } else {
  //     next();
  //   }
  // }
  if (to.meta.requiresAuth) {
    console.log(to.meta.requiresAuth)
    //这里判断用户是否登录，验证本地存储是否有token
    let token = localStorage.getItem('Authorization');
    console.log(token)
    if (!token) { // 判断当前的token是否存在
      
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }

});

export default router