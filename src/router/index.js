import Vue from 'vue'
import VueRouter from 'vue-router'
// 加载进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 路由配置
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

// 拦截器
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {

  }
  nprogress.start()
  next()
})
router.afterEach(() => {
  nprogress.done()
})

export default router
