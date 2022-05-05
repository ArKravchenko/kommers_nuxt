import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'

@Component({
  // name is required for recursive components as Author uses DocBodyElement and vice versa
  name: 'Author',
  components: {
    DocBodyElement,
  }
})
export default class Author extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) authorWidgetData!: ArticleLong.Author | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  get getAuthorBodyElements(){
    return this.authorWidgetData?.bodyElements?.length
    && this.authorWidgetData.bodyElements
  }



  mounted(){
    // console.log('this.authorWidgetData',this.authorWidgetData)
  }


}
