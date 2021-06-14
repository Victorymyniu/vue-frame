import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/components/Layout'
import Member from '@/views/inner-manage/member'
import Goods from '@/views/inner-manage/goods'
import Staff from '@/views/orga-manage/staff'
import Supplier from '@/views/orga-manage/supplier'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home,
        meta: {title: '首页'}
      },
      {
        path: '/goods',
        component: Goods,
        meta: {title: '商品管理'}
      },
      {
        path: '/member',
        component: Member,
        meta: {title: '会员管理'}
      },
      {
        path: '/supplier',
        component: Supplier,
        meta: {title: '供应商管理'}
      },
      {
        path: '/staff',
        component: Staff,
        meta: {title: '员工管理'}
      }
    ]
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
