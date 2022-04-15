import Vue from 'vue'
import Router from 'vue-router'

import Main from '~/pages/Kommersant/Main/Main.vue'
import Document from '~/pages/Kommersant/Document/Document.vue'
import Kommersant from '~/pages/Kommersant/Kommersant.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Kommersant,
        children:[
          {
            path: '/',
            component: Main,
          },
          {
            path: '/doc/:id',
            component: Document,
          },
        ]
      },
    ],
  })
}
