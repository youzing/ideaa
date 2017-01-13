import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from './pages/Login'
/* eslint-disable no-new */
const routes = [{path: '/', component: Login}]

const router = new VueRouter({ routes })
new Vue({
  el: '#app',
  data () { return {transitionName: 'slide'} },
  router,
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
      const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    }
  }
})
