import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'

// TODO Title2 has DocBodyElement[] as child but should have  (PlainTextElement | HTMLTagElement)[];
// TODO it also has PARA inside, should not
@Component({
  // name is required for recursive components as Title2 uses DocBodyElement and vice versa
  name: 'Title2',
  components: {
    DocBodyElement,
  }
})
export default class Title2 extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) title2WidgetData!: ArticleLong.Title2 | null;

  get getTitle2Elements(){
    return this.title2WidgetData?.bodyElements?.length
      && this.title2WidgetData.bodyElements
  }

  mounted(){
    // console.log('title2WidgetData',this.title2WidgetData)
  }
}
