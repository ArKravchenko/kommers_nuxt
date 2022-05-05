import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

// TODO в картинки прилетает абсолютный src
@Component({
  // name is required for recursive components as AdaptivePhoto uses DocBodyElement and vice versa
  name: 'AdaptivePhoto',
  components: {
    HtmlTagElement,
  }
})
export default class AdaptivePhoto extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) adaptivePhotoWidgetData!: ArticleLong.AdaptivePhoto | null;

  cdnUrl: string = process.env.CDN_URL || '';

  get getAdaptivePhotoMobileImg(){
    return this.adaptivePhotoWidgetData?.imgMobile
    && this.adaptivePhotoWidgetData.imgMobile
  }

  get getAdaptivePhotoDesktopImg(){
    return this.adaptivePhotoWidgetData?.imgDesktop
      && this.adaptivePhotoWidgetData.imgDesktop
  }

  get getAdaptivePhotoCaption(){
    return this.adaptivePhotoWidgetData?.caption?.length
      && this.adaptivePhotoWidgetData.caption
  }

  get getAdaptivePhotoCredentials(){
    return this.adaptivePhotoWidgetData?.credentials
      && this.adaptivePhotoWidgetData.credentials
  }

  get getAdaptivePhotoCredentialsAuthor(){
    return this.adaptivePhotoWidgetData?.credentials?.author?.length
      && this.adaptivePhotoWidgetData.credentials.author
  }

  get getAdaptivePhotoCredentialsOwner(){
    return this.adaptivePhotoWidgetData?.credentials?.owner?.length
      && this.adaptivePhotoWidgetData.credentials.owner
  }

  get getAdaptivePhotoCredentialsOwnerHref(){
    return this.adaptivePhotoWidgetData?.credentials?.ownerHref
      && this.adaptivePhotoWidgetData.credentials.ownerHref
  }

  get getAdaptivePhotoCredentialsPurchaseHref(){
    return this.adaptivePhotoWidgetData?.credentials?.purchaseHref
      && this.adaptivePhotoWidgetData.credentials.purchaseHref
  }


  mounted(){
    // console.log('this.adaptivePhotoWidgetData',this.adaptivePhotoWidgetData)
  }


}
