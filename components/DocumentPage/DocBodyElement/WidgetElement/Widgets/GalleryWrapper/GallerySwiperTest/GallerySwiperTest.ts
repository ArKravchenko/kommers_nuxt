import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue';
// import Picture from "~/components/general/Picture/Picture";

// import Swiper JS
const SwiperImport = () => import(
  /* webpackChunkName: "SwiperImport_N_K_P." */
  /* webpackMode: "eager" */
  '@/helpers/SwiperImport_N_K_P');
import type Swiper from 'swiper'

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];


@Component({
  // name is required for recursive components as GallerySwiperTest uses DocBodyElement and vice versa
  name: 'GallerySwiperTest',
  components: {
    HtmlTagElement,
    // Picture
  }
})
export default class GallerySwiperTest extends Vue {
  @Prop({
    // type: Object,
    // required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) galleryWidgetData!: ArticleLong.Gallery | null;

  cdnUrl: string = process.env.CDN_URL || '';

  isCredentialsOpen: boolean = false;

  inputUniqueId:string=Math.random().toString();

  isCredentialsOpenToggle(e: Event){
    this.isCredentialsOpen = !this.isCredentialsOpen
    e.preventDefault();
  }

  getNoscriptString(item: ArrayElement<ArticleLong.Gallery['images']>): string {
    return `<img class="doc_media__media fallback_image"
                     src="${item.img.src}"
                     alt="${item.img.alt}"
                >`
  }

  get getSizes(){
    return `(min-width: ${this.$scssVars.desktop1}px)
    ${this.$scssVars.main_width - this.$scssVars.cell_size_large - this.$scssVars.desktop_gap - 10}px,
    (min-width: ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap*2}px)
    ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap  * 2}px`
  }



  //TODO прилетает абсолютный src
  get getGalleryItems(){
    return this.galleryWidgetData?.images?.length
    && this.galleryWidgetData.images
  }

  getGalleryItemCaption(item: ArticleLong.GalleryPhoto){
    return item?.caption?.length
      && item.caption
  }

  getGalleryItemCredentials(item: ArticleLong.GalleryPhoto){
    return item?.credentials
      && item.credentials
  }
  //
  getGalleryItemCredentialsAuthor(item: ArticleLong.GalleryPhoto){
    return item?.credentials?.author?.length
      && item.credentials.author
  }

  getGalleryItemCredentialsOwner(item: ArticleLong.GalleryPhoto){
    return item?.credentials?.owner?.length
      && item.credentials.owner
  }

  getGalleryItemCredentialsOwnerHref(item: ArticleLong.GalleryPhoto){
    return item?.credentials?.ownerHref
      && item.credentials.ownerHref
  }
  //
  getGalleryItemCredentialsPurchaseHref(item: ArticleLong.GalleryPhoto){
    return item?.credentials?.purchaseHref
      && item.credentials.purchaseHref
  }

  swiper: InstanceType<typeof Swiper> | null = null

  updated(){
    if(process.client && this.swiper && this.swiper.update) {
      // this.swiper.update()
    }
  }

  mounted(){
    this.$nextTick(()=>{
      SwiperImport().then(({default:Swiper,Navigation, Pagination, Keyboard })=>{
        const initSwiper = ()=>{
          this.swiper = new Swiper(<HTMLElement>this.$el,{
            // Optional parameters
            // direction: 'vertical',
            // loop: true,

            keyboard: {
              enabled: true,
              onlyInViewport: true,
            },

            pagination: {
              el: ".slider-gallery-number",
              type: "fraction",
            },

            // Navigation arrows
            navigation: {
              nextEl: '.slider-next',
              prevEl: '.slider-prev',
            },
            modules: [
              Navigation,
              Pagination,
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
        if(window.requestIdleCallback){
          //@ts-ignore
          window.requestIdleCallback(initSwiper)
        } else {
          initSwiper()
        }
      })
    })


    // console.log('this.galleryWidgetData',this.galleryWidgetData)
  }


}
