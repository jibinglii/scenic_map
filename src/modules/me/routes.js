export default [{
    path: 'me',
    name: 'me',
    meta: {
      requiresAuth: false
    }, // 添加表示需要验证
    component: () => import('./Me')

  },
  {
    path: 'modifypwd',
    name: 'modifypwd',
    meta: {
      requiresAuth: true
    },
    component: () => import('./Modifypwd')
  },
  {
    path: 'userupdata',
    name: 'userupdata',
    meta: {
      requiresAuth: true
    },
    component: () => import('./UserUpdata')
  },
]
