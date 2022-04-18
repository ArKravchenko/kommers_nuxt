import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";



@Component({})
export default class MainToday extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) mainTodayData!: MainPageAPI.Endpoint_4['mainToday'] | null;

  cdnUrl: string = process.env.CDN_URL || ''

  get getFlag(){
    return this.mainTodayData?.data.docs[0]
  }

  get getRestDocs(){
    return this.mainTodayData?.data.docs.slice(1)
  }

  mounted(){
    console.log('this.mainTodayData',this.mainTodayData)
  }


}
