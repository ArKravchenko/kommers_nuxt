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

  @Prop({
    // type: Object,
    required: false,
    default: false,
  }) hideTitles!: ArticleLong.IArticleLong['data']['hideTitles'] | null;

  @Prop({
    type: String,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) readingTime!: string | null;
  @Prop({
    type: String,
    required: false,
    default: null,
  }) sharingHref!: string | null;


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

  get getIsSameDay(){
    return this.getArticlePublishedDate
    && this.getArticleUpdatedDate
    && (new Date(this.getArticlePublishedDate)).getDate()
      === (new Date(this.getArticleUpdatedDate)).getDate()
    && (new Date(this.getArticlePublishedDate)).getMonth()
      === (new Date(this.getArticleUpdatedDate)).getMonth()
  }


  formatDate(date: Date | false, isUpdate = false) {
    return date
    && isUpdate
      ? `${new Date(date).toLocaleTimeString('ru-ru',
      {
        hour: 'numeric',
        minute: 'numeric'
      })}`
      + (!this.getIsSameDay ?
        `, ${new Date(date).toLocaleDateString('ru-ru',
          {
            month: 'numeric',
            day: 'numeric',
          })}`
        : '')
      : date
      && new Date(date).toLocaleDateString('ru-ru',
        {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        })
  }



  // @Prop({
  //   type: Object,
  //   required: false,
  //   default: null,
  // }) sharing!: ArticleLong.IArticleLong['data'][''] | null;



  mounted() {
    alert(this.getIsSameDay)
  }
}
