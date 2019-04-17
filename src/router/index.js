import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default'
import Blank from '@/layout/Blank'
import Index from '@/page/index'
import GoodList from '@/page/goodList'
import ChangeCity from '@/page/changeCity'
import Login from '@/page/login'
import Register from '@/page/register'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect:'/index',
      component: Default,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'s/:name',
          name:'goods',
          component:GoodList
        },
        {
          path:'/changeCity',
          name:'changeCity',
          component:ChangeCity
        }
      ]
    },
    {
      path:'/blank',
      name:'blank',
      component:Blank,
      children:[
        {
          path:'login',
          name:'login',
          component:Login
        },
        {
          path:'register',
          name:'register',
          component:Register
        }
      ]
    }
  ]
})
