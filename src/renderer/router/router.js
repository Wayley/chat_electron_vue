const basic = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['@/Index'], resolve)
  },
  {
    path: '/sys-info',
    name: 'sys.info',
    // component: require('@/components/LandingPage').default
    component: resolve => require(['@/components/LandingPage'], resolve)
  },
  {
    path: '*',
    redirect: '/'
  }
]
const routes = Array.concat(basic)
export default routes
