import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import upload from '@/views/upload'
import menu from '@/views/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },{
      path:'/menu',
      name:'menu',
      component:menu
    }
  ]
})
