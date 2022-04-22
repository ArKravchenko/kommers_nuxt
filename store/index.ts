// DO NOT DELETE!
// this file is needed (even empty) to initialize vuex
import type {ActionTree, MutationTree, ActionContext, GetterTree} from 'vuex'
import type {Context} from '@nuxt/types';
import type ITimings from '@/interfaces/ITimings'


export const state = () => ({
  requestHeaders: null,
  requestQuery: null,
  timings: {
    browserToSsrSent: -1,
    browserToSsrReceived: -1,
    ssrToApiSent: -1,
    apiToSsrReceived: -1,
    ssrToClientSent: -1,
    clientReceived: -1,
  }
})

type NullOrAnyObject = { [key: string]: string } | null

export type RootState = {
  requestHeaders: NullOrAnyObject
  requestQuery: NullOrAnyObject
  timings: ITimings['timings']
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit(actionContext: ActionContext<RootState, RootState>,
                       context: Context & {req: Context['req'] & ITimings}) {
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

    await actionContext.commit('setBrowserToSsrReceived',context.req.timings.browserToSsrReceived)
  },
}

export const mutations: MutationTree<RootState> = {
  // setHeaders(state, data: NullOrAnyObject) {
  //   state.requestHeaders = data
  // },
  // setQuery(state, data: NullOrAnyObject) {
  //   state.requestQuery = data
  // },
  setBrowserToSsrSent(state: RootState, time: number) {
    state.timings.browserToSsrSent = time;
  },

  setBrowserToSsrReceived(state: RootState, time: number) {
    state.timings.browserToSsrReceived = time;
  },

  setSsrToApiSent(state: RootState, time: number) {
    state.timings.ssrToApiSent = time;
  },

  setApiToSsrReceived(state: RootState, time: number) {
    state.timings.apiToSsrReceived = time;
  },

  setSsrToClientSent(state: RootState, time: number) {
    state.timings.ssrToClientSent = time;
  },

  setClientReceived(state: RootState, time: number) {
    state.timings.clientReceived = time;
  },
}

export const getters: GetterTree<RootState,RootState> = {
  getTimings(state: RootState): ITimings['timings'] {
    return state.timings
  },
}
