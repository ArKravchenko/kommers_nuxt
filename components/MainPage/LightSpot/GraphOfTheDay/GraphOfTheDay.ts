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

  cdnUrl: string = process.env.CDN_URL || ''

  mounted(){
    console.log('this.graphOfTheDayData',this.graphOfTheDayData)
  }


}
