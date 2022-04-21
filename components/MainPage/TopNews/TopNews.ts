import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";



@Component({})
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
  // mounted(){
  //   console.log('this.topNewsData',this.topNewsData)
  // }


}
