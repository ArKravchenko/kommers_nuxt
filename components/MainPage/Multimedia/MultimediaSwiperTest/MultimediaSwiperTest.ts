import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Multimedia as IMultimedia} from "~/interfaces/API/MainPageApi";

// import Swiper JS
const SwiperImport = () => import(
  /* webpackChunkName: "SwiperImport_N_K." */
  /* webpackMode: "eager" */
  './../../LightSpot/LightSpotSwiperTest/SwiperTreeShaken');
import type Swiper from 'swiper'

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

@Component({})
export default class Multimedia extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) multimediaData!: IMultimedia.IMultimedia | null;

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

  swiper: InstanceType<typeof Swiper> | null = null
  scroll = true;

  mounted(){
    this.$nextTick(() => {
      SwiperImport().then(({ default: Swiper, Navigation, Keyboard }) => {
        const initSwiper = () => {
          this.scroll = false;
          this.swiper = new Swiper(<HTMLElement>this.$refs.swiper, {
            // Optional parameters
            // direction: 'vertical',
            // loop: true,

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
                slidesPerView: 4,
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
    //  console.log('this.multimediaData',this.multimediaData)
  }

}
