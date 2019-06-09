import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import vb from './views/v-buggered.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/v-buggered/:id',
      name: 'v-buggered',
      component: vb
    }

  ]
})
