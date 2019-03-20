import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../views/HelloWorld/HelloWorld.vue'
// 此种方式引入即可实现路由懒加载
const HelloWorld =  () => import('../views/HelloWorld/HelloWorld.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('../views/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: ()=>import('../views/news.vue')
    },
    /*{
      path: '/team',
      name: 'team',
      component: ()=>import('../views/team.vue')
    },*/
    {
      path: '/special',
      name: 'special',
      component: ()=>import('../views/special.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import('../views/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=>import('../views/contact.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: ()=>import('../views/practice.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      component: ()=>import('../views/cases.vue')
    },
    {
      path: '/articles',
      name: 'article',
      component: ()=>import('../views/article.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: ()=>import('../views/knowledge.vue')
    }
  ]
})
