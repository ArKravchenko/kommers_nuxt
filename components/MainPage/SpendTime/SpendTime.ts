import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {SpendTime as ISpendTime} from "~/interfaces/API/MainPageApi";



@Component({
  //@ts-ignore
  serverCacheKey(a:any) {
    // console.log(a)
    // return false
    return JSON.stringify(a)
  },
})
export default class SpendTime extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) spendTimeData!: ISpendTime.ISpendTime | null;

  cdnUrl: string = process.env.CDN_URL || ''


  mounted(){
    console.log('this.opinionBigData',this.spendTimeData)
  }


}
