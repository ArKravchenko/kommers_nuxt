import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
import type {AsyncComponent} from 'vue'
import {Fragment} from "vue-fragment";
// import BlockquoteOfTheDay from "./BlockquoteOfTheDay/BlockquoteOfTheDay.vue";
// import DigitOfTheDay from "./DigitOfTheDay/DigitOfTheDay.vue";
// import VideoOfTheDay from "./VideoOfTheDay/VideoOfTheDay.vue";
// import PhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDay.vue";
// import GraphOfTheDay from "./GraphOfTheDay/GraphOfTheDay.vue";

const GraphOfTheDay: AsyncComponent = () => import("../GraphOfTheDay/GraphOfTheDay.vue");
const DigitOfTheDay: AsyncComponent = () => import("../DigitOfTheDay/DigitOfTheDay.vue");
const VideoOfTheDay: AsyncComponent = () => import("../VideoOfTheDay/VideoOfTheDay.vue");
const PhotoOfTheDay: AsyncComponent = () => import("../PhotoOfTheDay/PhotoOfTheDay.vue");
const BlockquoteOfTheDay: AsyncComponent = () => import("../BlockquoteOfTheDay/BlockquoteOfTheDay.vue");

// import Swiper JS
const SwiperImport = () => import(
  /* webpackChunkName: "SwiperImport_N_K." */
  /* webpackMode: "eager" */
  '@/helpers/SwiperImport_N_K');
import type Swiper from 'swiper'

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];


@Component({
  //@ts-ignore
  serverCacheKey(a: any) {
    return a.lightSpotData?.dataHash ? a.lightSpotData.dataHash : JSON.stringify(a)
  },
  components: {
    BlockquoteOfTheDay,
    DigitOfTheDay,
    GraphOfTheDay,
    PhotoOfTheDay,
    VideoOfTheDay,
    Fragment
  }
})
export default class LightSpot extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) lightSpotData!: MainPageAPI.Endpoint_4['lightSpot'] | null;

  get getItems() {
    return this.lightSpotData?.data?.items?.length
      && this.lightSpotData?.data?.items
  }


  swiper: InstanceType<typeof Swiper> | null = null
  scroll = true;

  created(){
    if(process.client) {
      this.scroll = false;
    }
  }

  mounted() {
    //  console.log('this.lightSpotData', this.lightSpotData)
    this.$nextTick(() => {
      SwiperImport().then(({ default: Swiper, Navigation, Keyboard }) => {
        const initSwiper = () => {
          // this.scroll = false;
          this.swiper = new Swiper(<HTMLElement>this.$refs.swiper, {
            // Optional parameters
            // direction: 'vertical',
            // loop: true,

            keyboard: {
              enabled: true,
              onlyInViewport: true,
            },

            // pagination: {
            //   el: ".slider-gallery-number",
            //   type: "fraction",
            // },

            // Navigation arrows
            navigation: {

              nextEl: <HTMLElement>this.$refs['sliderNext'],
              prevEl: <HTMLElement>this.$refs['sliderPrev'],
            },
            modules: [
              Navigation,
              // Pagination,
              Keyboard
            ]
            //
            // // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
          })
        }
        //@ts-ignore
        if (window.requestIdleCallback) {
          //@ts-ignore
          window.requestIdleCallback(initSwiper)
        } else {
          initSwiper()
        }
      })
    })
  }


}
