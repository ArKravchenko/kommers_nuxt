import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";



@Component({
  //@ts-ignore
  serverCacheKey(a:any) {
    return a.topNewsData?.dataHash ? a.topNewsData.dataHash : JSON.stringify(a)
  },
})
export default class TopNews extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) topNewsData!: MainPageAPI.Endpoint_4['top'] | null;

  get getDocs() {
    return this.topNewsData?.data?.docs?.length
      && this.topNewsData.data.docs
  }

  get getPartner() {
    return this.topNewsData?.data?.partner
      && this.topNewsData.data.partner
  }
  // mounted(){
  //   console.log('this.topNewsData',this.topNewsData)
  // }


}
