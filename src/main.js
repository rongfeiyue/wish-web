// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filter/filter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Vuex from 'vuex'
import store from './store/index'

Vue.use(ElementUI)
Vue.use(MavonEditor)
Vue.use(Vuex)

Vue.config.productionTip = false

// 过滤器
for (let f in filters) {
  Vue.filter(f, filters[f])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
