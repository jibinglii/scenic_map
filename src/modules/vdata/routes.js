export default [{
    path: 'vdata',
    name: 'vdata',
    meta: {
      requiresAuth: true
    },
    component: () => import('./VData')
  },
  {
    path: 'datadetails',
    name: 'dataDetails',
    meta: {
      requiresAuth: true
    },
    component: () => import('./DataDetails')
  },
  {
    path: 'packdata',
    name: 'packData',
    meta: {
      requiresAuth: true
    },
    component: () => import('./PackData')
  },
  {
    path: 'ticketdata',
    name: 'ticketData',
    meta: {
      requiresAuth: true
    },
    component: () => import('./TicketData')
  },
  {
    path: 'monitors',
    name: 'monitors',
    meta: {
      requiresAuth: true
    },
    component: () => import('./Monitors')
  }
]
