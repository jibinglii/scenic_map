import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/modules/Home'
import VData from '@/modules/VData'
import Me from '@/modules/Me'
import Vlogin from '@/modules/Vlogin'
import Login from '@/modules/Login'
import Register from '@/modules/Register'
import DataDetails from '@/modules/DataDetails'
import Integral from '@/modules/Integral'
import TicketData from '@/modules/TicketData'
import Monitors from '@/modules/Monitors'
import SearchList from '@/modules/SearchList'
import HotelDetails from '@/modules/HotelDetails'
import PackData from '@/modules/PackData'
import VideoList from '@/modules/VideoList'
import VideoDetails from '@/modules/VideoDetails'
import SignIn from '@/modules/SignIn'
import ElectronicMap from '@/modules/ElectronicMap'
import ScenicSpot from '@/modules/ScenicSpot'
import Navigation from '@/modules/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
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
      path: '/vlogin',
      name: 'vlogin',
      component: Vlogin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
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
      path: '/searchlist',
      name: 'searchList',
      component: SearchList
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
    {
      path: '/electronicmap',
      name: 'electronicMap',
      component: ElectronicMap
    },
    {
      path: '/scenicspot',
      name: 'scenicSpot',
      component: ScenicSpot
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
  ]
})
