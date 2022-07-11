import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {PromoGalleryTop} from "~/interfaces/API/MainPageApi";
import LazyHydrate from "vue-lazy-hydration";



@Component({
  // @ts-ignore
  serverCacheKey(a: any) {
    return a.spendGalleryData?.dataHash
      ? a.spendGalleryData.dataHash
      : JSON.stringify(a)
  },
  components:{
    LazyHydrate
  }
})
export default class SpendGallery extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) spendGalleryData!: PromoGalleryTop.IPromoGallery | null;

  cdnUrl: string = process.env.CDN_URL || ''

  get getDocs(){
    return this.spendGalleryData?.data?.items?.length
    && this.spendGalleryData.data.items.length === 4
    && this.spendGalleryData.data.items
  }

  getItemTitle(item:PromoGalleryTop.PromoDoc){
    return item.title
    && item.title
  }

  getItemSubtitle(item:PromoGalleryTop.PromoDoc){
    return item.subtitle
      && item.subtitle
  }

  getItemImgSrc(item:PromoGalleryTop.PromoDoc){
    return item.img?.src
      && item.img.src
  }
  getItemImgAlt(item:PromoGalleryTop.PromoDoc){
    return item.img?.alt
      && item.img.alt
  }


  getItemImgNoscriptString(item:PromoGalleryTop.PromoDoc){
    return `<img class="spend__img slider-img fallback_image"
                     src="${item.img.src}"
                     alt="${item.img.alt}"
                >`
  }


  getItemHref(item:PromoGalleryTop.PromoDoc){
    return item.href
      && item.href
  }

  getItemTag(item:PromoGalleryTop.PromoDoc){
    return item.tag
      && item.tag
  }

  getItemHrefTarget(item: PromoGalleryTop.PromoDoc) {
    return !item.isSelfLink
      && { target: '_blanc'}
  }


  mounted(){
    //  console.log('this.spendGalleryData',this.spendGalleryData)
  }

}
