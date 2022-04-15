import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Parent/Home/Home.vue'
import Document from '~/pages/Parent/Document/Home.vue'
import Parent from '~/pages/Parent/Parent.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Parent,
        children:[
          {
            path: '/',
            component: Home,
          },
          {
            path: '/*',
            component: Document,
          },
        ]
      },
    ],
  })
}
