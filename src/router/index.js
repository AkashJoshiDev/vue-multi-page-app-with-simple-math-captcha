import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Router from 'vue-router'
import Home from 'components/Home'
import Profile from 'components/Profile'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile/:id/',
      name: 'Profile',
      component: Profile
    }
  ]
})
