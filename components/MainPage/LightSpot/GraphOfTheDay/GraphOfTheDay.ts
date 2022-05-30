import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {LightSpot} from "~/interfaces/API/MainPageApi";



@Component({})
export default class GraphOfTheDay extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) graphOfTheDayData!: LightSpot.IChart | null;

  // cdnUrl: string = process.env.CDN_URL || ''

  get getGraphOfTheDayImageSrc(){
    return this.graphOfTheDayData?.content?.img?.src
      && this.graphOfTheDayData.content.img.src
  }

  get getGraphOfTheDayImageAlt(){
    return this.graphOfTheDayData?.content?.img?.alt
      && this.graphOfTheDayData.content.img.alt
  }

  get getNoscriptString() {
    return this.getGraphOfTheDayImageSrc
      && `<img class="photd__img slider-img fallback_image"
                     src="${this.getGraphOfTheDayImageSrc}"
                     alt="${this.getGraphOfTheDayImageAlt}"
                >`
  }

  mounted(){
    //  console.log('this.graphOfTheDayData',this.graphOfTheDayData)
  }


}
