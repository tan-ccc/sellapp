import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


Vue.use(VueRouter)
//重写router 的push方法
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {path: '/goods', name: 'goods',component: () => import('../views/Goods.vue')},
    {path: '/evaluate',name: 'evaluate',component: () => import('../views/Evaluate')},
    {path: '/merchant',name: 'merchant',component: () => import('../views/Merchant')}
  ]
  },
]

const router = new VueRouter({
  routes
})

export default router