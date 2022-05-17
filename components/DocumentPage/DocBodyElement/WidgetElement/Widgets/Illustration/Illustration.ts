import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong, ImageFull, ImageSimple} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

type ArrayElement<ArrayType extends readonly (ImageFull | ImageSimple)[]> = ArrayType[number];

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

  get getNoscriptString() {
    return this.getIllustrationImg
      && `<img class="doc_media__media fallback_image"
                     src="${this.getIllustrationImg.src}"
                     alt="${this.getIllustrationImg.alt}"
                >`
  }

  get getSizes() {
    if (this.illustrationWidgetData?.align === 'left'
      || this.illustrationWidgetData?.align === 'right') {
      return `(min-width: ${this.$scssVars.desktop1}px) 240px, (min-width: ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap*2}px) ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap*2}px`
    } else {
      return `(min-width: ${this.$scssVars.desktop1}px) ${this.$scssVars.main_width - this.$scssVars.cell_size_large - this.$scssVars.desktop_gap - 10}px, (min-width: ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2}px) ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2}px`

    }
  }

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
