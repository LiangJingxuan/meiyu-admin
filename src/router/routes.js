export default [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('components/layout/Layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('views/home/Home')
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => import('views/goods/Goods')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Login')
  },
]