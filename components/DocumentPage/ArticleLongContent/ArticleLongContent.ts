import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";

import Vote from '@/components/MainPage/Vote/Vote.vue'
import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'
import DocHeader from '@/components/DocumentPage/DocHeader/DocHeader.vue';
import DocFooter from '@/components/DocumentPage/DocFooter/DocFooter.vue';
import ArticleSharing from '@/components/DocumentPage/ArticleSharing/ArticleSharing.vue';
const Banner = () => import(
  /* webpackChunkName: "Banner." */
  /* webpackMode: "eager" */
  "@/components/general/Banner/Banner.vue");




// TODO время прочтения выводить и на разводящей и в доке в одном формате
// TODO crumbs выводить и на разводящей и в доке в одном формате
@Component({
  // //@ts-ignore
  // serverCacheKey(a:any) {
  //   return JSON.stringify(a)
  // },

  components:{
    Vote,
    DocBodyElement,
    DocHeader,
    DocFooter,
    ArticleSharing,
    Banner,
  }
})
export default class ArticleLongContent extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) articleLongContent!: ArticleLong.IArticleLong | null;

  get getTitle(){
    return this.articleLongContent?.data?.title?.length
    && this.articleLongContent.data.title
  }

  get getSubtitle(){
    return this.articleLongContent?.data?.subtitle?.length
      && this.articleLongContent.data.subtitle
  }

  get getPubDate(){
    return this.articleLongContent?.data?.pubDate
      && this.articleLongContent.data.pubDate
  }

  get getBreadcrumb(){
    return this.articleLongContent?.data?.breadcrumb
      && this.articleLongContent.data.breadcrumb
  }

  get getFooterData(){
    return this.articleLongContent?.data?.footer
      && this.articleLongContent.data.footer
  }

  get getDocBodyElements(){
    return this.articleLongContent?.data?.content
      && !this.articleLongContent?.data?.content.isHtml
      && this.articleLongContent?.data?.content.docBodyElements?.length
      && this.articleLongContent.data.content.docBodyElements
  }

  get getIsRawHtml(){
    return this.articleLongContent?.data?.content
      && this.articleLongContent.data.content.isHtml
  }

  get getRawHtml(){
    return this.articleLongContent?.data?.content
      && this.articleLongContent?.data?.content?.htmlContent
      && this.articleLongContent?.data?.content?.htmlContent?.rawHtml
      && this.articleLongContent.data.content.htmlContent.rawHtml
  }

  mounted(){
    // console.log('this.articleLongContent',this.articleLongContent)
  }


}
