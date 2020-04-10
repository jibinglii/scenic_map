export default [
  {
    path: 'electronicmap',
    name: 'electronicMap',
    component: () => import('./ElectronicMap')
  },
  {
    path: 'scenicspot',
    name: 'scenicSpot',
    component: () => import('./ScenicSpot')
  },
  {
    path: 'navigation',
    name: 'navigation',
    component: () => import('./Navigation')
  }
]
