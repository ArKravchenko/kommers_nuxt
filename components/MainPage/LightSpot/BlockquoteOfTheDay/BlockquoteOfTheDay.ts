import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {LightSpot} from "~/interfaces/API/MainPageApi";



@Component({})
export default class BlockquoteOfTheDay extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) blockquoteOfTheDayData!: LightSpot.IQuote | null;

  // cdnUrl: string = process.env.CDN_URL || ''


  get getBlockquoteOfTheDayImageSrc(){
    return this.blockquoteOfTheDayData?.content?.person?.img?.src
      && this.blockquoteOfTheDayData.content.person.img.src
  }

  get getBlockquoteOfTheDayImageAlt(){
    return this.blockquoteOfTheDayData?.content?.person.img?.alt
      && this.blockquoteOfTheDayData.content.person.img.alt
  }

  get getNoscriptString() {
    return this.getBlockquoteOfTheDayImageSrc
      && `<img class="stretch fallback_image"
                     src="${this.getBlockquoteOfTheDayImageSrc}"
                     alt="${this.getBlockquoteOfTheDayImageAlt}"
                >`
  }


  mounted(){
    // console.log('this.blockquoteOfTheDayData',this.blockquoteOfTheDayData)
  }


}
