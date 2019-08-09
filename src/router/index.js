import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export const constRoutes =  [
  {
    path: '/',
    name: 'home',  
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home'),
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/list'),
        meta: {
          auth: true
        }
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/detail'),
        props: true,
        meta: {
          auth: true
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',  
    component: () => import(/* webpackChunkName: "home" */ '@/pages/404')
  }
]

// webpackChunkName: "home" 是写给webpack打包的时候使用的，将来会生成一个home.[hash].js文件，加载home组件的时候会单独加载这个js文件

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRoutes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !window.isLogin) {
    if (window.confirm('请登录')) {
      window.isLogin = true
      next()
    } else {
      next('/')
    }
  }
  next()
})

export default router