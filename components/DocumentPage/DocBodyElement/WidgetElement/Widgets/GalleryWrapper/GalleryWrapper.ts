import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import Gallery from './Gallery/Gallery.vue'
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'


@Component({
  // name is required for recursive components as GalleryWrapper uses DocBodyElement and vice versa
  name: 'GalleryWrapper',
  components: {
    Gallery,
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
