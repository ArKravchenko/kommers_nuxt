import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'

@Component({
  // name is required for recursive components as Citation uses DocBodyElement and vice versa
  name: 'Citation',
  components: {
    DocBodyElement,
  }
})
export default class Citation extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) citationWidgetData!: ArticleLong.Citation | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  get getCitationTitle(){
    return this.citationWidgetData?.title?.length
    && this.citationWidgetData.title
  }

  get getCitationText(){
    return this.citationWidgetData?.text?.length
      && this.citationWidgetData.text
  }


  mounted(){
    // console.log('this.citationWidgetData',this.citationWidgetData)
  }


}
