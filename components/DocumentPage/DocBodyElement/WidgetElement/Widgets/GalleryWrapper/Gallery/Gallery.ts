import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Gallery uses DocBodyElement and vice versa
  name: 'Gallery',
  components: {
    HtmlTagElement,
  }
})
export default class Gallery extends Vue {
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

  mounted(){
    // console.log('this.galleryWidgetData',this.galleryWidgetData)
  }


}
