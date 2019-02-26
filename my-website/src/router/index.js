import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'Index',
      component: Index
    },
    {//404
      path: '*',
      name: 'NotFound',
      component : resolve => require(['@/components/NotFound.vue'],resolve)
    }
  ]
})
