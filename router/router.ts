import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home/Home.vue';
import Document from '~/pages/Document/Document.vue'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
      },
        {
            path: '/document',
            component: Document,
        },
    ],
  })
}
