import {Component, Prop, Vue} from 'nuxt-property-decorator'
// import type {DocPageAPI} from "~/interfaces/API/MainPageApi";
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import WidgetElement from '@/components/DocumentPage/DocBodyElement/WidgetElement/WidgetElement.vue';
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue';


@Component({
  // name is required for recursive components as DocBodyElement
  // uses widgets and some widgets could use DocBodyElement
  name: 'DocBodyElement',
  components: {
    WidgetElement,
    HtmlTagElement,
  },
})
export default class DocBodyElement extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) docBodyElement!: ArticleLong.DocBodyElement | null;

  get getType() {
    if (!this.docBodyElement) return null

    if (typeof this.docBodyElement === 'string') {
      return 'string'
      //@ts-ignore
    } else if (this.docBodyElement['widgetType']) {
      return 'widget'
      //@ts-ignore
    } else if (this.docBodyElement['tagName']) {
      return 'tag'
    }
    return null
  }


  mounted(){
    // console.log('this.docBodyElement',this.docBodyElement)
  }
}
