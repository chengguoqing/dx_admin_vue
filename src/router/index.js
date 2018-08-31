import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import add_cp from '@/page/add_cp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/add_cp',
      name: 'add_cp',
      component: add_cp
    }
  ]
})
