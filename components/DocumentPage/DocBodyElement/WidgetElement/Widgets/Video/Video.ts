import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'
import fitvids from 'fitvids'

@Component({
  // name is required for recursive components as Video uses DocBodyElement and vice versa
  name: 'Video',
  components: {
    HtmlTagElement,
  }
})
export default class Video extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) videoWidgetData!: ArticleLong.Video | null;

  cdnUrl: string = process.env.CDN_URL || '';


  get getVideoEmbedHtml(){
    return this.videoWidgetData?.embedHtml
      && this.videoWidgetData.embedHtml
  }

  get getVideoCaption(){
    return this.videoWidgetData?.caption?.length
      && this.videoWidgetData.caption
  }

  get getVideoCredentials(){
    return this.videoWidgetData?.credentials
      && this.videoWidgetData.credentials
  }

  get getVideoCredentialsAuthor(){
    return this.videoWidgetData?.credentials?.author?.length
      && this.videoWidgetData.credentials.author
  }

  get getVideoCredentialsOwner(){
    return this.videoWidgetData?.credentials?.owner?.length
      && this.videoWidgetData.credentials.owner
  }

  get getVideoCredentialsOwnerHref(){
    return this.videoWidgetData?.credentials?.ownerHref
      && this.videoWidgetData.credentials.ownerHref
  }

  get getVideoCredentialsPurchaseHref(){
    return this.videoWidgetData?.credentials?.purchaseHref
      && this.videoWidgetData.credentials.purchaseHref
  }


  mounted(){
    fitvids('.fitvids-video')
    // console.log('this.videoWidgetData',this.videoWidgetData)
  }


}
