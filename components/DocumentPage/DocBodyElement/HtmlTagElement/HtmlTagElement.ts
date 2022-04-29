import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";


@Component({
  // name is required for recursive components
  name: 'HtmlTagElement',
  components: {
    HtmlTagElement,
  }
})
export default class HtmlTagElement extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) htmlTagElement!: ArticleLong.HTMLTagElement | null;


  get getTagName(){
    return this.htmlTagElement?.tagName
  }

  get getAttributes(){
    return this.htmlTagElement?.attributes
  }

  get getChildren(){
    return this.htmlTagElement?.children?.length
    && this.htmlTagElement.children
  }
}
