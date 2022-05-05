import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Free uses DocBodyElement and vice versa
  name: 'Free',
  components: {
    // HtmlTagElement,
  }
})
export default class Free extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) freeWidgetData!: ArticleLong.Free | null;

  // cdnUrl: string = process.env.CDN_URL || '';


  get getRawHtml(){
    return this.freeWidgetData?.rawHtml
      && this.freeWidgetData.rawHtml
  }


  mounted(){
    // console.log('this.freeWidgetData',this.freeWidgetData)
  }


}
