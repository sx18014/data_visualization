import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouer from 'vue-router'
import dashboard from 'components/dashboard/dashboard'
import {DatePicker} from 'element-ui'

Vue.component(DatePicker.name, DatePicker)

Vue.use(VueRouer)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  }
});
const router = new VueRouer({
  routes: [{
    path: '/dashboard',
    component: dashboard
  }],
  linkActiveClass: 'active'
})
new Vue({
  router,
  store,
  template: '<App>',
  components: {
    App
  },
  data: {
    eventHub: new Vue(),
    charts: []
  }
}).$mount('#app')

router.push('dashboard')
