import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import vb from './views/v-buggered.vue'
import BugDetails from './views/bug-details.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/v-buggered/',
      name: 'v-buggered',
      component: vb,
    },
    {
      path: '/bugs/:id',
      name: 'BugDetails',
      component: BugDetails,
    }

  ]
})
