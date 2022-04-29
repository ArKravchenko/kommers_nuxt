import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'


@Component({
  // name is required for recursive components as List uses DocBodyElement and vice versa
  name: 'List',
  components: {
    DocBodyElement,
  }
})
export default class List extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) listWidgetData!: ArticleLong.List | null;

  get getListKind() {
    return this.listWidgetData?.kind
    && this.listWidgetData.kind
  }

  // todo listWidgetData has wrong type, listElements field is called bodyElements
  get getListElements() {
    return this.listWidgetData?.bodyElements?.length
      && this.listWidgetData.bodyElements
  }

  getListElementBodyElements(listElement: ArticleLong.IListElement | any) {
    return listElement?.bodyElements?.length
      && listElement?.bodyElements
  }

  mounted(){
    // console.log('listWidgetData',this.listWidgetData)
  }
}
