import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {SpendTime as ISpendTime} from "~/interfaces/API/MainPageApi";


@Component({})
export default class SpendGallery extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) spendGalleryData!: ISpendTime.ISpendTime | null;

  cdnUrl: string = process.env.CDN_URL || ''


  mounted(){
    //  console.log('this.spendGalleryData',this.spendGalleryData)
  }

}
