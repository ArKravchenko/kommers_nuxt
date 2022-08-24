import {MutationTree, ActionContext, GetterTree, ActionTree} from "vuex";
import type {IDoc} from "@/components/Lenta/Interfaces/IDoc";
import {apiUrl, apiUrlPersonal, apiUrlBusiness} from '@/components/Lenta/config/config.json'

type IState = {
  articlesData: {
    timestamp?: number,
    docs: IDoc[],
    docsBusiness: IDoc[],
  },
  isLoading: boolean,
  isBusinessOnly: boolean,
  isPersonalOnly: boolean,
  newArticlesCounter: number,
  timestamp: number,
  authorized: boolean,
  lentaIsVertical: boolean,
}


export const state = (): IState => ({
  articlesData: {
    timestamp: 0,
    docs: [],
    docsBusiness: [],
  },
  isLoading: false,
  isBusinessOnly: false,
  isPersonalOnly: false,
  newArticlesCounter: 0,
  timestamp: -1,
  authorized: false,
  lentaIsVertical: false,
})

export const actions: ActionTree<IState, IState> = {
  // async init(context) {
  //     await context.dispatch('getDeposits');
  // },
  //
  async fetchArticlesData(context:ActionContext<IState, IState>) {
    // if (!context.state.isLoading) {
    // alert('before');
    // context.commit('setStartLoading');
    await fetch(context.state.isPersonalOnly
      ? apiUrlPersonal
      : context.state.isBusinessOnly
        ? apiUrlBusiness
        : apiUrl,
      {
        method: 'GET',
        // credentials: 'include',
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Articles data loading fail');
        }
      })
      .then(async (data) => {
        // alert('fetch succeed');
        await context.commit('setArticlesData', data);
        // console.log(data);
        await context.commit('setClearNewArticlesCounter');
        // alert('after');
      })
      .catch((e) => {
        console.error(e)
      });

    context.commit('setStopLoading');
    // }
  },
}

export const mutations: MutationTree<IState> = {
  setArticlesData(state:IState, data: IState['articlesData']) {
    if (!!data) {
      state.articlesData = data
    }
    if (!!data.timestamp) {
      state.timestamp = data.timestamp
    }
  },

  setLentaIsVertical(state:IState){
    state.lentaIsVertical = window.innerWidth >= 1600
  },

  setStartLoading(state:IState) {
    state.isLoading = true;
  },

  setStopLoading(state:IState) {
    state.isLoading = false;
  },
  setIsBusinessOnly(state:IState, value:boolean) {
    state.isBusinessOnly = value;
  },
  setIsPersonalOnly(state:IState, value:boolean) {
    state.isPersonalOnly = value;
  },
  setIncreaseNewArticlesCounter(state:IState, value?: number) {
    typeof value === 'number' ? state.newArticlesCounter = value : state.newArticlesCounter += 1;
  },
  setClearNewArticlesCounter(state:IState) {
    state.newArticlesCounter = 0;
  },
  setTimestamp(state:IState, value: number) {
    state.timestamp = value;
  },
  setAuthorized(state:IState, value: boolean) {
    state.authorized = value;
  },
}

export const getters: GetterTree<IState, IState> = {
  getIsLoading(state:IState) {
    return state.isLoading
  },
  getArticlesData(state:IState) {
    return state.articlesData
  },
  getIsBusinessOnly(state:IState) {
    return state.isBusinessOnly;
  },
  getIsPersonalOnly(state:IState) {
    return state.isPersonalOnly;
  },
  getNewArticlesCounter(state:IState) {
    return state.newArticlesCounter;
  },
  getAuthorized(state:IState) {
    return state.authorized;
  },
  getLentaIsVertical(state:IState) {
    return state.lentaIsVertical
  },
}

// export default { state, actions, mutations, getters }
