import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'

//TODO lazy import required as DocBodyElement has cross references with Spravka
const DocBodyElement = () => import(
  /* webpackChunkName: "DocBodyElement." */
  /* webpackMode: "lazy" */
  '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'
  );

//TODO Spravka has PARA inside that causes differences between browser dom and SSR dom
@Component({
  // name is required for recursive components as Spravka uses DocBodyElement and vice versa
  name: 'Spravka',
  components: {
    DocBodyElement,
  }
})
export default class Spravka extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) spravkaWidgetData!: ArticleLong.Spravka | null;

  get getSpravkaAlign() {
    return this.spravkaWidgetData?.align
    && this.spravkaWidgetData.align
  }

  //TODO не у всех справок есть поле align, а оно обязательное по типам
  get getSpravkaAlignClassName(){
    const align = this.spravkaWidgetData?.align
    switch (align){
      case "center":
        return 'incut--center'
      case "left":
        return 'incut--left'
      case "right":
        return 'incut--right'
      default:
        return 'incut--center'
    }
  }

  get getSpravkaHref(){
    return this.spravkaWidgetData?.href
    && this.spravkaWidgetData.href
  }

  get getSpravkaTitle(){
    return this.spravkaWidgetData?.title
      && this.spravkaWidgetData.title
  }

  get getSpravkaBodyElements(){
    return this.spravkaWidgetData?.bodyElements?.length
      && this.spravkaWidgetData.bodyElements
  }




  mounted(){
    // console.log('spravkaWidgetData',this.spravkaWidgetData)
  }
}
