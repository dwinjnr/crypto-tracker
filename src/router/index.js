import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/Layout'
import Dashboard from '@/components/Dashboard/Dashboard'
import User from '@/components/User/User'
import Signup from '@/components/Auth/Signup'
import Login from '@/components/Auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/signup',
          name: 'Signup',
          component: Signup
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
