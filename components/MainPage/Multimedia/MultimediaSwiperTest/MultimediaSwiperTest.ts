import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Multimedia as IMultimedia} from "~/interfaces/API/MainPageApi";

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
    return a.multimediaData?.dataHash ? a.multimediaData.dataHash : JSON.stringify(a)
  },
})
export default class Multimedia extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) multimediaData!: IMultimedia.IMultimedia | null;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) inDoc!: boolean;

  // cdnUrl: string = process.env.CDN_URL || ''

  get getItems(){
    return this.multimediaData?.data?.items?.length
    && this.multimediaData.data.items
  }

  getItemNoscriptString(item:ArrayElement<IMultimedia.IMultimedia['data']['items']>){
    return item.img
      && `<img class="uho__img fallback_image"
                     src="${item.img.src}"
                     alt="${item.img.alt}"
                >`
  }

  reachEnd = false;

  swiper: InstanceType<typeof Swiper> | null = null
  scroll = true;

  created(){
    if(process.client) {
      this.scroll = false;
    }
  }

  mounted(){
    this.$nextTick(() => {
      SwiperImport().then(({ default: Swiper, Navigation, Keyboard }) => {
        const initSwiper = () => {
          // this.scroll = false;
          this.swiper = new Swiper(<HTMLElement>this.$refs.swiper, {
            // Optional parameters
            // direction: 'vertical',
            // loop: true,
            on:{
              reachEnd:()=>{
                this.reachEnd=true
              },
              fromEdge:()=>{
                this.reachEnd=false
              }
            },

            keyboard: {
              enabled: true,
              onlyInViewport: true,
            },
            // slidesPerView: 1,
            spaceBetween: 40,
            // centerInsufficientSlides: true,
            // centeredSlidesBounds: true,
            // centeredSlides:true,

            breakpoints:{
              1198:{
                slidesPerView: this.inDoc? 2.7083 : 4,
                spaceBetween: 40,
              }
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
     console.log('this.multimediaData',this.multimediaData)
  }

}
