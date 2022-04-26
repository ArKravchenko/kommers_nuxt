import Vue from 'vue'
import Router from 'vue-router'
import type {AsyncComponent} from 'vue'

// import Main from '~/pages/Kommersant/Main/Main.vue'
// import Document from '~/pages/Kommersant/Document/Document.vue'
// import ListPage from '~/pages/Kommersant/ListPage/ListPage.vue'
import Kommersant from '~/pages/Kommersant/Kommersant.vue'
// const Kommersant = () => import('~/pages/Kommersant/Kommersant.vue').then(i => i.default)
const MainPage: AsyncComponent = () => import('~/pages/Kommersant/MainPage/MainPage.vue').then(i => i.default)
const DocumentPage: AsyncComponent = () => import('~/pages/Kommersant/DocumentPage/DocumentPage.vue').then(i => i.default)
const ListPage: AsyncComponent = () => import('~/pages/Kommersant/ListPage/ListPage.vue').then(i => i.default)


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
            component: MainPage,
          },
          {
            path: '/doc/:id',
            component: DocumentPage,
            props: true,
          },
          {
            path: '/listPage/:id',
            component: ListPage,
          },
          {
            path: '*',
            component: MainPage,
          },
        ]
      },
    ],
  })
}
