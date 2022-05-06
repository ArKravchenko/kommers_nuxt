import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Audio uses DocBodyElement and vice versa
  name: 'Audio',
  components: {
    // HtmlTagElement,
  }
})
export default class Audio extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) audioWidgetData!: ArticleLong.Audio | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  get getAudioHref(){
    return this.audioWidgetData?.href
    && this.audioWidgetData.href
  }

  get getAudioCaption(){
    return this.audioWidgetData?.caption
      && this.audioWidgetData.caption
  }

  mounted(){
    // console.log('this.audioWidgetData',this.audioWidgetData)
  }


}
