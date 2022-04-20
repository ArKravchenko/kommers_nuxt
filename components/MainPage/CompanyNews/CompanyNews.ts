import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {CompanyNews as ICompanyNews} from "~/interfaces/API/MainPageApi";


@Component({})
export default class CompanyNews extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) companyNewsData!: ICompanyNews.ICompanyNews | null;

  cdnUrl: string = process.env.CDN_URL || ''


  mounted(){
    // console.log('this.companyNewsData',this.companyNewsData)
  }

}
