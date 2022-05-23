import {Watch, Component} from 'nuxt-property-decorator'

import {LentaAbstract} from '@/components/Lenta/components/Lenta/lentaAbstract';
// import Loading from '../../Loading/Loading.vue';
// import Error from '../../Error/Error.vue';
// import BusinessAnnounce from '~/../lentaVue/components/BusinessAnnounce/BusinessAnnounce.vue'
// const BusinessAnnounce = () => import(/* webpackChunkName: 'lazyChunks/lentaVue_BusinessAnnounce_lazy' */ '~/../lentaVue/components/BusinessAnnounce/BusinessAnnounce.vue')
// const BusinessAnnounce = () => ({
//     component: import(/* webpackChunkName: 'lazyChunks/lentaVue_BusinessAnnounce_lazy' */ '@/components/Lenta/components/BusinessAnnounce/BusinessAnnounce.vue'),
//     loading: Loading,
//     error: Error,
//     // timeout: 0
// })
// import {Getter, Mutation} from 'vuex-class';

// const CommercialAnnounce = () => import(/* webpackChunkName: 'lazyChunks/lentaVue_CommercialAnnounce_lazy' */ '~/../lentaVue/components/CommercialAnnounce/CommercialAnnounce.vue')

// const CommercialAnnounce = () => ({
//     component: import(/* webpackChunkName: 'lazyChunks/lentaVue_CommercialAnnounce_lazy' */ '@/components/Lenta/components/CommercialAnnounce/CommercialAnnounce.vue'),
//     loading: Loading,
//     error: Error,
//     // timeout: 0
// })

import ArticleVertical from './ArticleVertical/ArticleVertical.vue'
import {IWindow} from "../../../Interfaces/IWindow";
// const ArticleVertical = () => import(/* webpackChunkName: 'lazyChunks/lentaVue_ArticleVertical_lazy' */ './ArticleVertical/ArticleVertical.vue')
// const ArticleVertical = () => ({
//     component: import(/* webpackChunkName: 'lazyChunks/lentaVue_ArticleVertical_lazy' */ './ArticleVertical/ArticleVertical.vue'),
//     loading: Loading,
//     error: Error,
//     // timeout: 0
// }) as any

// const config = require('~/../lentaVue/config/config.json');

declare let window:IWindow

@Component({
    components: {
        // BusinessAnnounce,
        // CommercialAnnounce,
        ArticleVertical
    },
})
export default class LentaVertical extends LentaAbstract {
    gearHandler(e: Event) {
        super.gearHandler.call(this, e);
    }

    personalLentaHandler(e: Event) {
        super.personalLentaHandler.call(this, e);
    };

    async articlesDeliveredButtonHandler(){
        super.articlesDeliveredButtonHandler.call(this);
    }

    selectBusinessOnlyHandler(e: Event) {
        super.selectBusinessOnlyHandler.call(this, <Event & { target: HTMLInputElement & { checked: boolean } }>e);
    };

    @Watch('getIsPersonalOnly')
    sendMyLentaEvent(newValue: boolean, oldValue: boolean) {
        if (!newValue && this.getAuthorized) {
            try {
                // alert('my_lenta show показать свою')
                window.kommersant.sendEvent('my_lenta', 'show'); // показать свою
            } catch {
                console.error(`Event my_lenta click not sent. kommersant.sendEvent not found`);
            }
        }
    }

    @Watch('getAuthorized')
    sendYoursLentaEvent(newValue: boolean, oldValue: boolean) {
        if (!newValue) {
            try {
                // alert('yours_lenta show настроить свою')
                window.kommersant.sendEvent('yours_lenta', 'show'); // настроить свою
            } catch {
                console.error(`Event my_lenta click not sent. kommersant.sendEvent not found`);
            }
        } else {
            try {
                // alert('my_lenta show показать свою')
                window.kommersant.sendEvent('my_lenta', 'show'); // показать свою
            } catch {
                console.error(`Event my_lenta click not sent. kommersant.sendEvent not found`);
            }
        }
    }

    mounted(){
       this.sendShowEvents()
    }
}
