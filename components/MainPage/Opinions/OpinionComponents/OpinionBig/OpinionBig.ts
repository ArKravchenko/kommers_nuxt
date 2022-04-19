import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Opinions} from "~/interfaces/API/MainPageApi";



@Component({})
export default class OpinionBig extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) opinionData!: Opinions.Opinion | null;

  cdnUrl: string = process.env.CDN_URL || ''


  mounted(){
    console.log('this.opinionBigData',this.opinionData)
  }


}
