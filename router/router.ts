import Vue from 'vue'
import Router from 'vue-router'
import type {AsyncComponent} from 'vue'

// import Main from '~/pages/Kommersant/Main/Main.vue'
// import Document from '~/pages/Kommersant/Document/Document.vue'
// import ListPage from '~/pages/Kommersant/ListPage/ListPage.vue'
import Kommersant from '~/pages/Kommersant/Kommersant.vue'
// const Kommersant = () => import(/* webpackChunkName: "Kommersant" */'~/pages/Kommersant/Kommersant.vue').then(i => i.default)
const Main: AsyncComponent = () => import(/* webpackChunkName: "Main" */'~/pages/Kommersant/Main/Main.vue').then(i => i.default)
const Document: AsyncComponent = () => import(/* webpackChunkName: "Document" */'~/pages/Kommersant/Document/Document.vue').then(i => i.default)
const ListPage: AsyncComponent = () => import(/* webpackChunkName: "ListPage" */'~/pages/Kommersant/ListPage/ListPage.vue').then(i => i.default)


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
            path: '/listPage/:id',
            component: ListPage,
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
