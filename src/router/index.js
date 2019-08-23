import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Login from '../components/Login'
import CommonDetail from '../components/public_modules/CommonDetail'
import CommonList from '../components/public_modules/CommonList'
import CommonEdit from '../components/public_modules/CommonEdit'
import NotFound from '../components/public_modules/NotFound'
import Error from '../components/public_modules/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:type/detail/:id',
      name: 'detail',
      component: CommonDetail,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/list/:type',
      name: 'list',
      component: CommonList
    },
    {
      path: '/edit',
      name: 'edit',
      component: CommonEdit
    },
    {
      path: '/Notfound',
      name: 'Notfound',
      component: NotFound,
      meta: {
        title: '页面不存在'
      }
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error,
      meta: {
        title: '错误页面'
      }
    },
    {
      path: '*',
      redirect: '/Notfound'
    }
  ]
})
