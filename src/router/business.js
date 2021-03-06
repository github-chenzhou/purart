import Vue from 'vue'
import Router from 'vue-router'
import 'bulma'
import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

//
import Business from '@/pages/business/business.vue'
// 商品组件
const Product = resolve => require(['@/pages/business/product'], resolve)
// 商品列表组件
const ProductList = resolve => require(['@/pages/business/product-list'], resolve)
// 拍卖场组件
const Auction = resolve => require(['@/pages/business/auction'], resolve)
// 拍卖场列表
const AuctionList = resolve => require(['@/pages/business/auction-list'], resolve)
// 拍行组件
const BusinessInfo = resolve => require(['@/pages/business/info'], resolve)
// 拍场直播
const AuctionLive = resolve => require(['@/pages/business/auction-live'], resolve)


Vue.use(Router)
Vue.use(Element)
Vue.use(Element, { locale })

const businessRouter = new Router({
  // base: '/',
  base: process.env.NODE_ENV === 'production' ? '/business' : '/',
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes: [{
      path: '/',
      name: 'business',
      component: Business,
      children: [{
          path: 'product/:id',
          name: 'business-product',
          component: Product
        },
        {
          path: 'products/:id',
          name: 'business-product-list',
          component: ProductList
        },
        {
          path: 'auction/:id',
          name: 'business-auction',
          component: Auction
        },
        {
          path: 'auctions',
          name: 'business-auction-list',
          component: AuctionList
        },
        {
          path: 'info',
          name: 'business-info',
          component: BusinessInfo
        },
        {
          path: 'live/:id',
          name: 'business-auction-live',
          component: AuctionLive
        }
      ]
    }
    // {
    //   path: 'product',
    //   name: 'business-product',
    //   component: Product
    // },
    // {
    //   path: 'auction',
    //   name: 'business-auction',
    //   component: Auction
    // },
    // {
    //   path: 'info',
    //   name: 'business-info',
    //   component: BusinessInfo
    // }
  ]
})

businessRouter.beforeEach((to, from, next) => {
  // 进入组件之前
  next()
})

businessRouter.afterEach(route => {
  // google统计
  setTimeout(() => {
    typeof ga === 'function' && ga('send', 'pageview', location.pathname);
  }, 1000);
});


export default businessRouter;
