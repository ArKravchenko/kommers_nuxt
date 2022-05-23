import {Watch, Component} from 'nuxt-property-decorator'

import {LentaAbstract} from '@/components/Lenta/components/Lenta/lentaAbstract';
// import Loading from "../../Loading/Loading.vue";
// import Error from "../../Error/Error.vue";
import {IWindow} from "../../../Interfaces/IWindow";
// import BusinessAnnounce from '~/../lentaVue/components/BusinessAnnounce/BusinessAnnounce.vue';
// const BusinessAnnounce = () => import(/* webpackChunkName: "lazyChunks/lentaVue_BusinessAnnounce_lazy" */ '~/../lentaVue/components/BusinessAnnounce/BusinessAnnounce.vue')

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
// }) as any

//TODO replace articles with ArticleHorizontal component

// const ArticleHorizontal = () => ({
//     component: import(/* webpackChunkName: 'lazyChunks/lentaVue_CommercialAnnounce_lazy' */ './ArticleHorizontal/ArticleHorizontal.vue'),
//     loading: Loading,
//     error: Error,
//     // timeout: 0
// }) as any

declare let window:IWindow;

@Component({
    components: {
        // BusinessAnnounce,
        // CommercialAnnounce,
        // ArticleHorizontal
    },
})
export default class LentaHorizontal extends LentaAbstract {
    private isOpen: boolean = false;

    private hide() {
        this.isOpen = false;
    }

    @Watch('isOpen')
    sendEvents(newValue:boolean){
        if(newValue){
           this.sendShowEvents();
            try {
                window.kommersant.sendEvent('horisont_lenta', 'click'); // раскрыть ленту свою
            } catch {
                console.error(`Event horisont_lenta click not sent. kommersant.sendEvent not found`);
            }
        }
    }

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

    mounted(){
        try {
            window.kommersant.sendEvent('horisont_lenta', 'show'); // раскрыть ленту свою
        } catch {
            console.error(`Event horisont_lenta show not sent. kommersant.sendEvent not found`);
        }
    }
}
