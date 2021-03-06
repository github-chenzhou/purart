import Vue from 'vue'
import Router from 'vue-router'
import 'bulma'
import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

// import Business from '@/pages/business/business'
import Index from '@/pages/index/index'
const Live = resolve => require(['@/pages/live/live'], resolve)
const Search = resolve => require(['@/pages/search/search'], resolve)
const Order = resolve => require(['@/pages/order/order'], resolve)
const Aftermarket = resolve => require(['@/pages/aftermarket/aftermarket'], resolve)
const Download = resolve => require(['@/pages/download/download'], resolve)


Vue.use(Router)
Vue.use(Element)
Vue.use(Element, { locale })

const router = new Router({
  base: process.env.NODE_ENV === 'production' ? '/purart' : '/',
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  // base: '/',
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/aftermarket',
      name: 'aftermarket',
      component: Aftermarket
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    }

  ]
})

router.beforeEach((to, from, next) => {
  // 进入组件之前
  next()
})

router.afterEach(route=>{
  // google统计
  setTimeout(() => {
    typeof ga === 'function' && ga('send', 'pageview', location.pathname);
  }, 1000);
});


export default router;
