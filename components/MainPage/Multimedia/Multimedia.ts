import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Multimedia as IMultimedia} from "~/interfaces/API/MainPageApi";


@Component({})
export default class Multimedia extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) multimediaData!: IMultimedia.IMultimedia | null;

  cdnUrl: string = process.env.CDN_URL || ''


  mounted(){
    //  console.log('this.multimediaData',this.multimediaData)
  }

}
