import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";



@Component({
  components:{

  }
})
export default class Crumbs extends Vue {
  @Prop({
    type: Object,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) breadcrumb!: ArticleLong.IArticleLong['data']['breadcrumb'] | null

  get getBreadcrumbText(){
    return this.breadcrumb?.text
    && this.breadcrumb.text

  }

  get getBreadcrumbHref(){
    return this.breadcrumb?.href
      && this.breadcrumb.href
  }


  mounted() {
    // console.log('this.breadcrumb',this.breadcrumb)
  }
}
