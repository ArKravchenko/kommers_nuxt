//@ts-nocheck
import {IDoc} from "./Interfaces/IDoc";
import {ActionContext} from "vuex";

const {apiUrl, apiUrlPersonal, apiUrlBusiness} = require('~/../lentaVue/config/config.json');
type IState = typeof store.state

const store:any = {
    state: {
        articlesData: {
            timestamp: 0,
            docs: <IDoc>[],
            docsBusiness: <IDoc>[],
        },
        isLoading: false,
        isBusinessOnly: false,
        isPersonalOnly: false,
        newArticlesCounter: 0,
        timestamp: -1,
        authorized: false,
        lentaIsVertical: false,
    },
    mutations: {
        setArticlesData(state:IState, data: { articlesData:IDoc[] } & {timestamp:number}) {
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
    },
    actions: {
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
                        credentials: 'include',
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
    },

    getters: {
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
        //
        // async setFilter(context, filter) {
        //     context.commit('setFilter', filter);
        // },
    },
};

const getStore = (plugins:any[]) => Object.assign(store,{plugins})

export default getStore

