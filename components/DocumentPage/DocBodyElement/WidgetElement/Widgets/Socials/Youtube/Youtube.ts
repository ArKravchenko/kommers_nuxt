import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue';
import fitvids from 'fitvids'

@Component({
  // name is required for recursive components as Youtube uses DocBodyElement and vice versa
  name: 'Youtube',
  components: {
    // HtmlTagElement,
  }
})
export default class Youtube extends Vue {
  @Prop({
    // type: Object,
    // required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) socialsWidgetData!: ArticleLong.Socials | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  get getRawHtml(){
    return this.socialsWidgetData?.rawHtml
  }

  mounted(){
      fitvids('.fitvids-youtube')
    // console.log('this.socialsWidgetData Youtube',this.socialsWidgetData)
  }


}
