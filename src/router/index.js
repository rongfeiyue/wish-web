import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Login from '../components/Login'
import CommonDetail from '../components/public_modules/CommonDetail'
import CommonList from '../components/public_modules/CommonList'
import CommonEdit from '../components/public_modules/CommonEdit'

Vue.use(Router)

export default new Router({
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
      path: '/detail/:id',
      name: 'detail',
      component: CommonDetail
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
    }
  ]
})
