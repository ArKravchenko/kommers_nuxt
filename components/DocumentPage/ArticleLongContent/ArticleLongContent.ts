import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {DocPageAPI} from "~/interfaces/API/MainPageApi";

import Vote from '~/components/MainPage/Vote/Vote.vue'

// TODO время прочтения выводить и на разводящей и в доке в одном формате
@Component({
  // //@ts-ignore
  // serverCacheKey(a:any) {
  //   return JSON.stringify(a)
  // },

  components:{
    Vote,
  }
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
