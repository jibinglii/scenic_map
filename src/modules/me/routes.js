export default [
  {
    path: 'me',
    name: 'me',
    component: () => import('./Me'),
    meta: { requiresAuth: false } // 添加表示需要验证
  }
]
