import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'

//TODO lazy import required as DocBodyElement has cross references
const DocBodyElement = () => import(
  /* webpackChunkName: "DocBodyElement." */
  /* webpackMode: "lazy" */
  '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'
  );

@Component({
  // name is required for recursive components as Collapse uses DocBodyElement and vice versa
  name: 'Collapse',
  components: {
    DocBodyElement,
  }
})
export default class Collapse extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) collapseWidgetData!: ArticleLong.Collapse | null;

  get getTitle() {
    return this.collapseWidgetData?.title?.length
    && this.collapseWidgetData.title
  }

  get getSubtitle() {
    return this.collapseWidgetData?.subtitle?.length
      && this.collapseWidgetData.subtitle
  }

  get getBodyElements() {
    return this.collapseWidgetData?.bodyElements?.length
      && this.collapseWidgetData.bodyElements
  }


  get getCollapseRawHtml(){
    return this.collapseWidgetData?.rawHtml
      && this.collapseWidgetData.rawHtml
  }

  isExpanded: boolean = false;

  clickIsExpandedToggle() {
    const el = (<HTMLElement>this.$refs['collapse']);
    this.isExpanded = !this.isExpanded
    el.style.maxHeight = this.isExpanded
      ? el.scrollHeight + "px"
      : '';
  }

  uniqueInputId: string = Math.random().toString()

  mounted() {
    // console.log('this.collapseWidgetData',this.collapseWidgetData)
  }

}
