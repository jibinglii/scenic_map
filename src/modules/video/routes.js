export default [
  {
    path: 'videoList',
    name: 'videoList',
    component: () => import('./VideoList')
  },
  {
    path: 'videoDetails',
    name: 'videoDetails',
    component: () => import('./videoDetails')
  },
]
