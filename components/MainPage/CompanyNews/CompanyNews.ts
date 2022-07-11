import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {CompanyNews as ICompanyNews} from "~/interfaces/API/MainPageApi";
import LazyHydrate from "vue-lazy-hydration";

@Component({
  // @ts-ignore
  serverCacheKey(a: any) {
    return a.companyNewsData?.dataHash
      ? a.companyNewsData.dataHash
      : JSON.stringify(a)
  },
  components: {
    LazyHydrate
  }
})
export default class CompanyNews extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) companyNewsData!: ICompanyNews.ICompanyNews | null;

  // cdnUrl: string = process.env.CDN_URL || ''

  get getTitle() {
    return this.companyNewsData?.data?.title
      && this.companyNewsData.data.title
  }

  get getHref() {
    return this.companyNewsData?.data?.href
      && this.companyNewsData.data.href
  }

  get getNews() {
    return this.companyNewsData?.data?.news?.length
      && this.companyNewsData.data.news
  }

  getItemTitle(item: ICompanyNews.NewsItem) {
    return item.title
      && item.title
  }

  getItemSubtitle(item: ICompanyNews.NewsItem) {
    return item.subtitle
      && item.subtitle
  }

  getItemPubDate(item: ICompanyNews.NewsItem) {
    return item.pubDate
      && item.pubDate
  }

  getItemHref(item: ICompanyNews.NewsItem) {
    return item.href
      && item.href
  }

  formatDate(date: Date) {
    return new Date(date).toLocaleDateString('ru-ru',
      {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
  }


  mounted() {
    // console.log('this.companyNewsData',this.companyNewsData)
  }

}
