import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
import OpinionBig from "./OpinionComponents/OpinionBig/OpinionBig";
import OpinionSmall from "./OpinionComponents/OpinionSmall/OpinionSmall";



@Component({
  components:{
    OpinionSmall,
    OpinionBig
  }
})
export default class Opinions extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) opinionsData!: MainPageAPI.Endpoint_4['opinions'] | null;

  cdnUrl: string = process.env.CDN_URL || ''

  get getOpinions(){
    return this.opinionsData?.data?.opinions?.length
    && this.opinionsData.data.opinions
  }


  mounted(){
    //  console.log('this.mainTodayData',this.opinionsData)
  }


}
