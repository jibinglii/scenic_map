export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home')
  },
  {
    path: 'signin',
    name: 'signIn',
    component: () => import('./SignIn')
  },
  {
    path: 'integral',
    name: 'integral',
    component: () => import('./Integral')
  },
  {
    path: 'searchlist',
    name: 'searchList',
    component: () => import('./SearchList')
  },
  {
    path: 'hoteldetails',
    name: 'hotelDetails',
    component: () => import('./HotelDetails')
  },
]
