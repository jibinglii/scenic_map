export default [{
    path: '/',
    name: 'home',
    component: () => import('./Home')
  },
  {
    path: 'signin',
    name: 'signIn',
    meta: {
      requiresAuth: true
    },
    component: () => import('./SignIn')
  },
  {
    path: 'integral',
    name: 'integral',
    meta: {
      requiresAuth: true
    },
    component: () => import('./Integral')
  },
  {
    path: 'searchlist',
    name: 'searchList',
    meta: {
      requiresAuth: true
    },
    component: () => import('./SearchList'),

  },
  {
    path: 'hoteldetails',
    name: 'hotelDetails',
    meta: {
      requiresAuth: true
    },
    component: () => import('./HotelDetails')
  },
  {
    path: 'scenicDetails',
    name: 'scenicDetails',
    meta: {
      requiresAuth: true
    },
    component: () => import('./ScenicDetails')
  },
]
