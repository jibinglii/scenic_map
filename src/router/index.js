import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/modules/Home'
import VData from '@/modules/VData'
import Me from '@/modules/Me'
import Vlogin from '@/components/Vlogin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import DataDetails from '@/modules/DataDetails'
import Integral from '@/modules/Integral'
import TicketData from '@/modules/TicketData'
import Monitors from '@/modules/Monitors'
import Search from '@/modules/Search'
import HotelDetails from '@/modules/HotelDetails'
import PackData from '@/modules/PackData'
import VideoList from '@/modules/VideoList'
import VideoDetails from '@/modules/VideoDetails'
import SignIn from '@/modules/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vdata',
      name: 'vData',
      component: VData
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/Vlogin',
      name: 'Vlogin',
      component: Vlogin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/datadetails',
      name: 'dataDetails',
      component: DataDetails
    },
    {
      path: '/integral',
      name: 'integral',
      component: Integral
    },
    {
      path: '/ticketdata',
      name: 'ticketData',
      component: TicketData
    },
    {
      path: '/monitors',
      name: 'monitors',
      component: Monitors
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/hoteldetails',
      name: 'hotelDetails',
      component: HotelDetails
    },
    {
      path: '/packdata',
      name: 'packData',
      component: PackData
    },
    {
      path: '/videolist',
      name: 'videoList',
      component: VideoList
    },
    {
      path: '/videodetails',
      name: 'videoDetails',
      component: VideoDetails
    },
    {
      path: '/signin',
      name: 'signIn',
      component: SignIn
    },
  ]
})
