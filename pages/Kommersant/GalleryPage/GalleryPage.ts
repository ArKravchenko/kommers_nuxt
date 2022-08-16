import {Component, Vue} from 'nuxt-property-decorator'
import type {Context} from "@nuxt/types";
import type {
  DocPageAPI,
  CompanyNews as ICompanyNews,
  Multimedia as IMultimedia
} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";


// TODO keep imports in the same order on every page or replace with lazy pages

import Promo from '~/components/general/Promo/Promo.vue'
import CompanyNews from '~/components/MainPage/CompanyNews/CompanyNews.vue'
const Multimedia = () => import(
  /* webpackChunkName: "Multimedia." */
  /* webpackMode: "lazy" */
  "~/components/MainPage/Multimedia/MultimediaSwiperTest/MultimediaSwiperTest.vue");

const ArticleLongContent = () => import(
  /* webpackChunkName: "ArticleLongContent" */
  /* webpackMode: "lazy" */
  "~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue");
const ArticleLongContentRawHTML = () => import(
  /* webpackChunkName: "ArticleLongContentRawHTML" */
  /* webpackMode: "lazy" */
  "~/components/DocumentPage/ArticleLongContentRawHTML/ArticleLongContentRawHTML.vue");

import type {MetaInfo} from "vue-meta";


@Component({
  components: {
    Promo,
    CompanyNews,
    ArticleLongContent,
    ArticleLongContentRawHTML,
    Multimedia,
  },
})
export default class GalleryPage extends Vue {
  docPageData: DocPageAPI.Endpoint_4 | null = null;
  companyNewsData: ICompanyNews.ICompanyNews | null = null;
  multimediaData: IMultimedia.IMultimedia | null = null;


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
      = fetcher('galleryPageData', {
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

    if (process.server) {
      ctx.store.commit('setApiToSsrReceived', Date.now())
    }
    return {
      docPageData,
      companyNewsData,
    }
  }

  async fetchMultimedia(){
    // TagType тип тега.
    // 3 - регион
    // 4 - паблишинг
    const tagType = 3

    const region: DocPageAPI.DocContent['data']['regionId'] = this.docPageData?.data?.regionId || 77;

    await fetcher('docMultimedia', {
      query: {
        id: region,
        type: tagType
      }
    })
      .then((res:Response) => {
        if (res.ok) {
          return res.json()
        } else {
          console.error('Error fetching multimediaData data', res.status);
          setTimeout(() => this.fetchMultimedia(), 3000)
        }
      }).then((data:IMultimedia.IMultimedia)=>{
        this.multimediaData = data;
        // console.log('pictureOfTheDay',data)
      })
      .catch((err:Error)=>{
        console.error(err);
        setTimeout(() => this.fetchMultimedia(), 3000)
      })
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

  observer!: IntersectionObserver;

  mounted() {
    console.log('this.docPageData', this.docPageData)
    console.log('this.multimediaData',this.multimediaData)

    let options = {
      rootMargin: '400px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,observer)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){
            this.fetchMultimedia();
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
