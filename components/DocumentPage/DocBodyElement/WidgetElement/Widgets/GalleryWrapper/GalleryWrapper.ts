import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import GallerySwiperTest from './GallerySwiperTest/GallerySwiperTest.vue'
// import Gallery from './Gallery/Gallery.vue'
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'

// const GallerySwiperTest = () => import(
//   /* webpackChunkName: "GallerySwiperTest." */
//   /* webpackMode: "lazy" */
//   './GallerySwiperTest/GallerySwiperTest.vue')
// const Gallery = () => import(
//   /* webpackChunkName: "Gallery." */
//   /* webpackMode: "eager" */
//   './Gallery/Gallery.vue')


@Component({
  // name is required for recursive components as GalleryWrapper uses DocBodyElement and vice versa
  name: 'GalleryWrapper',
  components: {
    // Gallery,
    GallerySwiperTest,
    DocBodyElement
  }
})
export default class GalleryWrapper extends Vue {
  @Prop({
    // type: Object,
    // required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) galleryWrapperWidgetData!: ArticleLong.Gallery | null;

  get getIsExternal(){
    return this.galleryWrapperWidgetData?.external
  }

  get getIsExternalHref(){
    return this.galleryWrapperWidgetData?.href
  }

  get getTitle(){
    return this.galleryWrapperWidgetData?.title?.length
      && this.galleryWrapperWidgetData.title
  }


  mounted(){
    // console.log('this.galleryWrapperWidgetData',this.galleryWrapperWidgetData)
  }


}
