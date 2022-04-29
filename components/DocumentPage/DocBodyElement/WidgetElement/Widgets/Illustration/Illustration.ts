import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Illustration uses DocBodyElement and vice versa
  name: 'Illustration',
  components: {
    HtmlTagElement,
  }
})
export default class Illustration extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) illustrationWidgetData!: ArticleLong.Illustration | null;

  cdnUrl: string = process.env.CDN_URL || '';

  //TODO не у всех справок есть поле align, а оно обязательное по типам
  get getIllustrationAlignClassName() {
    const align = this.illustrationWidgetData?.align
    switch (align) {
      case "center":
        return 'illustration illustration--center'
      case "left":
        return 'illustration illustration--left'
      case "right":
        return 'illustration'
      default:
        return null
    }
  }

  //TODO прилетает абсолютный src
  get getIllustrationImg(){
    return this.illustrationWidgetData?.img
    && this.illustrationWidgetData.img
  }

  get getIllustrationCaption(){
    return this.illustrationWidgetData?.caption?.length
      && this.illustrationWidgetData.caption
  }

  get getIllustrationCredentials(){
    return this.illustrationWidgetData?.credentials
      && this.illustrationWidgetData.credentials
  }

  get getIllustrationCredentialsAuthor(){
    return this.illustrationWidgetData?.credentials?.author?.length
      && this.illustrationWidgetData.credentials.author
  }

  get getIllustrationCredentialsOwner(){
    return this.illustrationWidgetData?.credentials?.owner?.length
      && this.illustrationWidgetData.credentials.owner
  }

  get getIllustrationCredentialsOwnerHref(){
    return this.illustrationWidgetData?.credentials?.ownerHref
      && this.illustrationWidgetData.credentials.ownerHref
  }

  get getIllustrationCredentialsPurchaseHref(){
    return this.illustrationWidgetData?.credentials?.purchaseHref
      && this.illustrationWidgetData.credentials.purchaseHref
  }

  mounted(){
    // console.log('this.illustrationWidgetData',this.illustrationWidgetData)
  }


}
