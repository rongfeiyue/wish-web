import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Login from '../components/public_modules/Login'

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
    }
  ]
})
