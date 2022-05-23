// import 'core-js';
// import 'regenerator-runtime/runtime';

// if (!!process.env.PUBLIC_BUILD_REDESIGN_PATH) {
//     // @ts-ignore
//     __webpack_public_path__ = process.env.PUBLIC_BUILD_REDESIGN_PATH;
// }

import type {VueConstructor} from "vue";
// @ts-ignore
import {getCookie} from './helpers/cookie';
import {debounce} from './helpers/debounce';

// @ts-ignore
import {authorizedCookie, apiUrl, apiUrlPersonal, apiUrlBusiness} from '~/../lentaVue/config/config.json';

const AppImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_App_lazy" */ './App.vue');
const VueImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_Vue" */ 'vue');
const StoreImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_store" */ './store');
const ClickOutsideDirectiveImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_clickOutsideDirective" */ './helpers/clickOutsideDirective');
// @ts-ignore
const VuexImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_Vuex" */ 'vuex/dist/vuex.common.js');
// @ts-ignore
const VuexPersistImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_vuex-persist" */ 'vuex-persist');
// const VuexMultiTabStateImport = () => import(/* webpackChunkName: "lazyChunks/lentaVue_vvuex-multi-tab-state" */ 'vuex-multi-tab-state');

let dataLoaded: boolean = false;
let lentaMounted: boolean = false;
let fetchAttempt:number = 0;
let lenta: any;
let Vue: VueConstructor<Vue>;
let store: any;
const initLentaDebounce = debounce(initLenta, 250);

function initLenta() {
    if (window.innerWidth >= 1198) {
        Promise.all([
            AppImport(),
            VueImport(),
            StoreImport(),
            ClickOutsideDirectiveImport(),
            VuexImport(),
            VuexPersistImport(),
            // VuexMultiTabStateImport(),
        ])
            .then(([
                       {default: AppLazy},
                       {default: VueLazy},
                       {default: getStoreLazy},
                       {default: clickOutsideLazy},
                       {default: VuexLazy},
                       {default: VuexPersistLazy},
                       // {default: VuexMultiTabState},
                   ]) => {

                Vue = VueLazy;
                Vue.use(VuexLazy);
                Vue.directive('click-outside', clickOutsideLazy);

                const vuexLocal = new VuexPersistLazy({
                    storage: window.localStorage,
                });
                store = new VuexLazy.Store(getStoreLazy([vuexLocal.plugin]));

                // store = new VuexLazy.Store(getStoreLazy([VuexMultiTabState(
                //     {
                //         statesPaths: [
                //             'articlesData',
                //             'isBusinessOnly',
                //             'isPersonalOnly',
                //             'newArticlesCounter',
                //             'authorized',
                //         ],
                //     }
                // )]));

                lenta = new Vue({
                    store: store,
                    render: (h: any) => {
                        return h(AppLazy) //, {props: {testAppProp: data}})
                    },
                });

                initialFetch();

                window.removeEventListener('resize', initLentaDebounce);
                console.log('>1198');
            })
    } else {
        window.addEventListener('resize', initLentaDebounce);
    }
}


async function initialFetch(loadAllLenta?: boolean) {
    if (loadAllLenta) {
        store.commit('setIsPersonalOnly', false);
    }

    fetch(!!getCookie(authorizedCookie)
    && store.getters.getIsPersonalOnly
        ? apiUrlPersonal
        : store.getters.getIsBusinessOnly
            ? apiUrlBusiness
            : apiUrl, {
        method: 'GET',
        credentials: 'include',
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Initial articles data loading fail');
            }
        })
        .then((data) => {
            dataLoaded = true;
            store.commit('setArticlesData', data);
            store.commit('setIncreaseNewArticlesCounter', 0);
            const targetElem = document.getElementById('lenta');

            if (targetElem && !lentaMounted) {
                lenta.$mount(targetElem);
                lentaMounted = true;
                console.log('Successfully mounted in fetch');
                window.removeEventListener('resize', initLentaDebounce);
            }

        })
        .catch(async (e) => {
            console.error(e);
            fetchAttempt+=1;
            await new Promise((resolve) => setTimeout(resolve, fetchAttempt * 5000 ));
            initialFetch(true)
        });
};

window.addEventListener('load', function (event) {
    if (dataLoaded && !lentaMounted) {
        lenta.$mount('#lenta');
        lentaMounted = true;
        console.log('Successfully mounted in event');
        window.removeEventListener('resize', initLentaDebounce);
    }
});


initLenta();
