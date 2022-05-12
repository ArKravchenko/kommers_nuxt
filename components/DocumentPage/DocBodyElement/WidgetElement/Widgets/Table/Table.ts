import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Table uses DocBodyElement and vice versa
  name: 'Table',
  components: {
    HtmlTagElement,
  }
})
export default class Table extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) tableWidgetData!: ArticleLong.Table | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  get getTableBodyElements(){
    return this.tableWidgetData?.bodyElements?.length
    && this.tableWidgetData.bodyElements
  }

  get getTableIsExpandable(){
    return this.tableWidgetData?.expandable
      && this.tableWidgetData.expandable
  }



  mounted(){
    console.log('this.tableWidgetData',this.tableWidgetData)
  }


}
