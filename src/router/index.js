import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import add_cp from '@/page/add_cp'
import cp_list from '@/page/cp_list'
import denglu from '@/page/denglu'
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
    },{
      path: '/cp_list',
      name: 'cp_list',
      component: cp_list
    },{
      path: '/denglu',
      name: 'denglu',
      component: denglu
    }
  ]
})
