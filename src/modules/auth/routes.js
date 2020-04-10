export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('./Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./Register')
  },
  {
    path: '/vlogin',
    name: 'vlogin',
    component: () => import('./Vlogin')
  },
]
