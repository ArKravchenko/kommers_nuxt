import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";

// import ArticleLongContent from '~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue';
// import ArticleLongContentRawHTML from '~/components/DocumentPage/ArticleLongContentRawHTML/ArticleLongContentRawHTML.vue';
const ArticleLongContent = () => import(
  /* webpackChunkName: "ArticleLongContent." */
  /* webpackMode: "lazy" */
  "~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue");
const ArticleLongContentRawHTML = () => import(
  /* webpackChunkName: "ArticleLongContentRawHTML." */
  /* webpackMode: "lazy" */
  "~/components/DocumentPage/ArticleLongContentRawHTML/ArticleLongContentRawHTML.vue");

@Component({
  components: {
    ArticleLongContent,
    ArticleLongContentRawHTML
  }
})
export default class ArticlePreview extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) articleLongContent!: ArticleLong.IArticleLong | null;

  preview: boolean = true;

  get getIsRawHtml(){
    return this.articleLongContent?.data?.content
      && this.articleLongContent.data.content.isHtml
  }

  showFullClickHandler() {
    this.preview = false
  }

}
