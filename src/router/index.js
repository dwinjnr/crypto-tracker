import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/Layout'
import Dashboard from '@/components/Dashboard/Dashboard'

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
        }
      ]
    }
  ]
})
