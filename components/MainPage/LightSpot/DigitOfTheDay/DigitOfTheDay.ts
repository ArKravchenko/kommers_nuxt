import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {LightSpot} from "~/interfaces/API/MainPageApi";



@Component({})
export default class DigitOfTheDay extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) digitOfTheDayData!: LightSpot.IDigit | null;

  mounted(){
    //  console.log('this.digitOfTheDayData',this.digitOfTheDayData)
  }


}
