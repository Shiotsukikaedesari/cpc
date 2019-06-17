import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Index from '@/components/index'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
