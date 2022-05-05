import {Component, Prop, Vue} from 'nuxt-property-decorator'
import Crumbs from '@/components/ListPage/Crumbs/Crumbs'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from "@/components/DocumentPage/DocBodyElement/DocBodyElement.vue";
import ArticleSharing from "~/components/DocumentPage/ArticleSharing/ArticleSharing.vue";




@Component({
  components:{
    Crumbs,
    DocBodyElement,
    ArticleSharing
  }
})
export default class DocHeader extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
  }) title!: ArticleLong.IArticleLong['data']['title'] | null;

  @Prop({
    // type: Object,
    required: true,
    default: null,
  }) subtitle!: ArticleLong.IArticleLong['data']['subtitle'] | null;


  @Prop({
    // type: Object,
    required: true,
    default: null,
  }) pubDate!: ArticleLong.IArticleLong['data']['pubDate'] | null;

  @Prop({
    // type: Object,
    required: true,
    default: null,
  }) breadcrumb!: ArticleLong.IArticleLong['data']['breadcrumb'] | null;


  get getTitle(){
    return this.title?.length
    && this.title
  }

  get getSubtitle(){
    return this.subtitle?.length
      && this.subtitle
  }

  get getArticlePublishedDate() {
    return this.pubDate
      && !this.pubDate.hideDate
      && this.pubDate.date
  }

  get getArticleUpdatedDate() {
    return this.pubDate
      && !this.pubDate.hideDate
      && this.pubDate.dateUpdate
  }


  formatDate(date: Date | false){
    return date && new Date(date).toLocaleDateString('ru-ru',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute:'numeric'
      })
  }



  // @Prop({
  //   type: Object,
  //   required: false,
  //   default: null,
  // }) sharing!: ArticleLong.IArticleLong['data'][''] | null;



  // mounted() {
  //   console.log(this.actualnoData)
  // }
}
