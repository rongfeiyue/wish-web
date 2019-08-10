import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/public_modules/Main'
import Login from '../components/public_modules/Login'
import CommonDetail from '../components/public_modules/CommonDetail'

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
    }
  ]
})
