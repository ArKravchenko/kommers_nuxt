import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'


@Component({
  // name is required for recursive components as Para uses DocBodyElement and vice versa
  name: 'Para',
  components: {
    HtmlTagElement,
  }
})
export default class Para extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) paraWidgetData!: ArticleLong.Para | null;

  get getParaElements(){
    return this.paraWidgetData?.bodyElements?.length
      && this.paraWidgetData.bodyElements
  }
}
