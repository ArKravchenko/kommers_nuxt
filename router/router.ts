import Vue from 'vue'
import Router from 'vue-router'

// import Main from '~/pages/Kommersant/Main/Main.vue'
// import Document from '~/pages/Kommersant/Document/Document.vue'
import Kommersant from '~/pages/Kommersant/Kommersant.vue'
// const Kommersant = () => import(/* webpackChunkName: "Kommersant" */'~/pages/Kommersant/Kommersant.vue').then(i => i.default)
const Main = () => import(/* webpackChunkName: "Main" */'~/pages/Kommersant/Main/Main.vue').then(i => i.default)
const Document = () => import(/* webpackChunkName: "Document" */'~/pages/Kommersant/Document/Document.vue').then(i => i.default)

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Kommersant,
        children: [
          {
            path: '/',
            component: Main,
          },
          {
            path: '/doc/:id',
            component: Document,
            props: true,
          },
          {
            path: '*',
            component: Main,
          },
        ]
      },
    ],
  })
}
