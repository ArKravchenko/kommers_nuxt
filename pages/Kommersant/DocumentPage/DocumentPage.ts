import {Component, Vue} from 'nuxt-property-decorator'
import type {Context} from "@nuxt/types";
import type {DocPageAPI, CompanyNews as ICompanyNews} from "~/interfaces/API/MainPageApi";
// import type {AsyncComponent} from 'vue'
import {fetcher} from "~/helpers/fetcher";
// import {ArticleLong} from "~/interfaces/API/MainPageApi";
// import Cols from '~/components/general/Cols/Cols.vue'

// TODO keep imports in the same order on every page or replace with lazy pages
// import TopNews from '~/components/MainPage/TopNews/TopNews.vue'
// import LightSpot from '~/components/MainPage/LightSpot/LightSpot.vue'
// import Opinions from '~/components/MainPage/Opinions/Opinions.vue'
import Promo from '~/components/general/Promo/Promo.vue'
import CompanyNews from '~/components/MainPage/CompanyNews/CompanyNews.vue'
// import Multimedia from '~/components/MainPage/Multimedia/Multimedia.vue'
// const Banner = () => import(
//   /* webpackChunkName: "Banner." */
//   /* webpackMode: "eager" */
//   "@/components/general/Banner/Banner.vue");

import ArticleLongContent from '~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue';
import ArticleLongContentRawHTML from '~/components/DocumentPage/ArticleLongContentRawHTML/ArticleLongContentRawHTML.vue';

const ArticlePreview = () => import(
  /* webpackChunkName: "ArticlePreview." */
  /* webpackMode: "lazy" */
  '~/components/DocumentPage/ArticlePreview/ArticlePreview.vue');

const PictureOfTheDay = () => import(
  /* webpackChunkName: "PictureOfTheDay." */
  /* webpackMode: "lazy" */
  '~/components/DocumentPage/PictureOfTheDay/PictureOfTheDay.vue');

import type {MetaInfo} from "vue-meta";


@Component({
  components: {
    // Cols,
    Promo,
    CompanyNews,
    ArticleLongContent,
    ArticleLongContentRawHTML,
    ArticlePreview,
    PictureOfTheDay,
    // Banner
  },
})
export default class DocumentPage extends Vue {
  docPageData: DocPageAPI.Endpoint_4 | null = null;
  companyNewsData: ICompanyNews.ICompanyNews | null = null;
  lazyDocsIds: DocPageAPI.LazyLoadIds = [];


  async asyncData(ctx: Context) {


    const docId = ctx.route.params.id
    // console.log(ctx.route.params.id)
    // TagType тип тега.
    // 3 - регион
    // 4 - паблишинг
    const tagType = 3

    if (process.server) {
      ctx.store.commit('setSsrToApiSent', Date.now())
    }

    const errorCatch404 = (err:Error) => {
      ctx.error({
        statusCode: 404,
        message: JSON.stringify(err)
      })
    }

    const handleRes = (res:Response) => {
      if (res.ok) {
        return res.json()
      } else {
        ctx.error({
          statusCode: res.status,
          message: JSON.stringify({
            url: res.url,
            statusText: res.statusText,
          }),
        })
      }
    }

    const docPageDataPromise: Promise<DocPageAPI.Endpoint_4>
      = fetcher('docPageData', {
      query: {
        docId,
      }
    })
      .then(handleRes)
      .catch(errorCatch404)

    const companyNewsDataPromise: Promise<ICompanyNews.ICompanyNews>
      = fetcher('companyNews')
      .then(handleRes)
      .catch(errorCatch404)

    const [
      docPageData,
      companyNewsData,
    ] = await Promise.all([
      docPageDataPromise,
      companyNewsDataPromise,
    ])

    const region: DocPageAPI.DocContent['data']['regionId'] = docPageData?.data?.regionId

    const lazyDocsIds: ICompanyNews.ICompanyNews
      = await fetcher('lazyDocsIds', {
      query: {
        id: region,
        type: tagType
      }
    })
      .then(handleRes)
      .catch(errorCatch404)


    if (process.server) {
      ctx.store.commit('setApiToSsrReceived', Date.now())
    }
    return {
      docPageData,
      companyNewsData,
      lazyDocsIds
    }
  }

  head() {
    return this.headJson
  }

  get getIsRawHtml(){
    return this.docPageData?.data?.content?.isHtml
    && this.docPageData?.data?.content?.htmlContent?.rawHtml
  }

  get getRegionId(){
    return this.docPageData?.data?.regionId
    && this.docPageData.data.regionId
  }

  get headJson(): MetaInfo  {
    return {
      title: this.getTitle
        ? this.$extractText(this.getTitle)
        : '',
      meta: this.getNoIndex
        ? [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
        : []
    }
  }

  get getTitle(){
    return this.docPageData?.data?.title?.length
      && this.docPageData.data.title
  }

  get getNoIndex() {
    return this.docPageData?.data?.meta?.noIndex
      && this.docPageData.data.meta.noIndex
  }

  // get getOpinions(){
  //   return this.listPageWidgets
  //     && this.listPageWidgets.opinions
  // }
  //
  // get getTop(){
  //   return this.listPageWidgets
  //     && this.listPageWidgets.top
  // }
  //
  // get getLightSpot(){
  //   return this.listPageWidgets
  //     && this.listPageWidgets.lightSpot
  // }
  //
  // get getMultimedia(){
  //   return this.listPageWidgets
  //     && this.listPageWidgets.multimedia
  // }


  //TODO TEST LAZY LENTA
  observer!: IntersectionObserver;

  // visible: boolean = false;

  lazyDocs: DocPageAPI.Endpoint_4[]=[]


  async fetchLazyDoc(docId: number | undefined) {
    if(!docId) return
    const docPageData: DocPageAPI.Endpoint_4
      = await fetcher('docPageData', {
      query: {
        docId,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.error(`Fetch lazy doc fail, response status ${res.status}`)
        }
      })
      .catch(err => {
       console.error('Fetch lazy doc fail',err)
      })

    if(docPageData){
      this.lazyDocs.push(docPageData)
    } else {
      this.lazyDocsIds.push(docId)
    }
    this.observer.observe(<Element>this.$refs.visibilityTarget);
  }

  mounted() {
    console.log('this.docPageData', this.docPageData)

    let options = {
      rootMargin: '400px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,observer)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){
          if (this.lazyDocs.length <= 4 && this.lazyDocsIds.length){
            const nextDoc = this.lazyDocsIds.pop()
            if (nextDoc && nextDoc.toString() != this.$route.params.id){
              this.fetchLazyDoc(nextDoc)
            } else if (this.lazyDocsIds.length){
              this.fetchLazyDoc(this.lazyDocsIds.pop())
            }
          }
          observer.unobserve(<Element>this.$refs.visibilityTarget)
        }
      })
    }, options);

    this.observer.observe(<Element>this.$refs.visibilityTarget);
  }

  beforeUnmount(){
    this.observer.disconnect();
  }

  //TODO TEST LAZY LENTA END

}
