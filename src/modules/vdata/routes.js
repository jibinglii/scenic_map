export default [
  {
    path: 'vdata',
    name: 'vdata',
    component: () => import('./VData')
  },
  {
    path: 'datadetails',
    name: 'dataDetails',
    component: () => import('./DataDetails')
  },
  {
    path: 'packdata',
    name: 'packData',
    component: () => import('./PackData')
  },
  {
    path: 'ticketdata',
    name: 'ticketData',
    component: () => import('./TicketData')
  },
  {
    path: 'monitors',
    name: 'monitors',
    component: () => import('./Monitors')
  }
]
