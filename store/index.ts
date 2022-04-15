// DO NOT DELETE!
// this file is needed (even empty) to initialize vuex
import type { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  requestHeaders: null,
  requestQuery: null,
})

type NullOrAnyObject = { [key: string]: string }

export type RootState = {
  requestHeaders: NullOrAnyObject
  requestQuery: NullOrAnyObject
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit(actionContext, context) {
    // const delay = 2000
    // if (context.req.headers) {
    //   await new Promise<void>((resolve) => {
    //     setTimeout(() => {
    //       actionContext.commit('setHeaders', context.req.headers)
    //       resolve()
    //     }, delay)
    //   })
    // }
    // if (context.query) {
    //   await new Promise<void>((resolve) => {
    //     setTimeout(() => {
    //       actionContext.commit('setQuery', context.query)
    //       resolve()
    //     }, delay)
    //   })
    // }

    actionContext.commit('testModule/testMutation')
  },
}

export const mutations: MutationTree<RootState> = {
  setHeaders(state, data: NullOrAnyObject) {
    state.requestHeaders = data
  },
  setQuery(state, data: NullOrAnyObject) {
    state.requestQuery = data
  },
}
