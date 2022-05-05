import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'
import {Fragment} from 'vue-fragment'
// TODO Vvodka has PARA inside, should not
@Component({
  // name is required for recursive components as Vvodka uses DocBodyElement and vice versa
  name: 'Vvodka',
  components: {
    DocBodyElement,
    Fragment
  }
})
export default class Vvodka extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) vvodkaWidgetData!: ArticleLong.Vvodka | null;

  get getVvodkaElements() {
    return this.vvodkaWidgetData?.bodyElements?.length
      && this.vvodkaWidgetData.bodyElements
  }

  mounted(){
    // console.log('vvodkaWidgetData',this.vvodkaWidgetData)
  }
}
