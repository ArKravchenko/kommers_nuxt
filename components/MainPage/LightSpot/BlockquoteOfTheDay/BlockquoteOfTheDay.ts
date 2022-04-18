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

  cdnUrl: string = process.env.CDN_URL || ''

  mounted(){
    console.log('this.blockquoteOfTheDayData',this.blockquoteOfTheDayData)
  }


}
