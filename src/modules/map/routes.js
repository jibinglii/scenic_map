export default [{
    path: 'electronicmap',
    name: 'electronicMap',
    meta: {
      requiresAuth: true
    },
    component: () => import('./ElectronicMap')
  },
  {
    path: 'scenicspot',
    name: 'scenicSpot',
    meta: {
      requiresAuth: true
    },
    component: () => import('./ScenicSpot')
  },
  {
    path: 'navigation',
    name: 'navigation',
    meta: {
      requiresAuth: true
    },
    component: () => import('./Navigation')
  }
]
