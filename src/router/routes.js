import Login from '@/views/login'

export default [

  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { layout: 'simple' }
  },
  // This catches any attempt to access non-existent routes, and MUST be the last route in this file
  {
    path: '*',
    component: () => import('@/components/not-found')
  }
]
