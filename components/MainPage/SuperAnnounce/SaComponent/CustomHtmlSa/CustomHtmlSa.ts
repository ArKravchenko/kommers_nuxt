import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {SuperAnnounce} from "~/interfaces/API/MainPageApi";



@Component({})
export default class CustomHtmlSa extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) customHtmlSaData!: SuperAnnounce.ICustomHtmlSA | null;

  cdnUrl: string = process.env.CDN_URL || ''

  mounted(){
    console.log('this.customHtmlSaData', this.customHtmlSaData)
  }
}
