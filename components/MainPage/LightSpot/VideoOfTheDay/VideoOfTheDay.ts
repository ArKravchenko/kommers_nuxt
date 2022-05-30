import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {LightSpot} from "~/interfaces/API/MainPageApi";



@Component({})
export default class VideoOfTheDay extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) videoOfTheDayData!: LightSpot.IVideo | null;

  get getVideoOfTheDayImageSrc(){
    return this.videoOfTheDayData?.content?.img?.src
    && this.videoOfTheDayData.content.img.src
  }

  get getVideoOfTheDayImageAlt(){
    return this.videoOfTheDayData?.content?.img?.alt
      && this.videoOfTheDayData.content.img.alt
  }

  get getNoscriptString() {
    return this.getVideoOfTheDayImageSrc
      && `<img class="slider-img fallback_image"
                     src="${this.getVideoOfTheDayImageSrc}"
                     alt="${this.getVideoOfTheDayImageAlt}"
                >`
  }

  // cdnUrl: string = process.env.CDN_URL || ''

  mounted(){
    //  console.log('this.videoOfTheDayData',this.videoOfTheDayData)
  }


}
