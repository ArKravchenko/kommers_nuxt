import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {DocPageAPI} from "~/interfaces/API/MainPageApi";



@Component({
  // //@ts-ignore
  // serverCacheKey(a:any) {
  //   return JSON.stringify(a)
  // },
})
export default class ArticleLongContent extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) articleLongContent!: DocPageAPI.Endpoint_4 | null;


  mounted(){
    console.log('this.articleLongContent',this.articleLongContent)
  }


}
