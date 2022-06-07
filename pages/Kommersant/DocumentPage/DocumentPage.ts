import {Component, Vue} from 'nuxt-property-decorator'
import type {Context} from "@nuxt/types";
import type {DocPageAPI} from "~/interfaces/API/MainPageApi";
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


import ArticleLongContent from '~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue'
import ArticlePreview from '~/components/DocumentPage/ArticlePreview/ArticlePreview.vue'
import {MetaInfo} from "vue-meta";


@Component({
  components: {
    // Cols,
    Promo,
    CompanyNews,
    ArticleLongContent,
    ArticlePreview
    // Banner
  },
})
export default class DocumentPage extends Vue {
  docPageData: DocPageAPI.Endpoint_4 | null = null;


  async asyncData(ctx: Context) {


    const docId = ctx.route.params.id
    // console.log(ctx.route.params.id)

    if (process.server) {
      ctx.store.commit('setSsrToApiSent', Date.now())
    }

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
          ctx.error({
            statusCode: res.status,
            message: JSON.stringify({
              url: res.url,
              statusText: res.statusText,
            }),

          })
        }
      })
      .catch(err => {
        ctx.error({
          statusCode: 404,
          message: JSON.stringify(err)
        })
      })


    if (process.server) {
      ctx.store.commit('setApiToSsrReceived', Date.now())
    }
    return {
      docPageData,
    }
  }

  head() {
    return this.headJson
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

  lazyDocsIds = [
    '5154649',
    '5152798',
    '5154572',
    '5153056',
    '5154638',
  ]


  async fetchLazyDoc(docId:string){
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
          // ctx.error({
          //   statusCode: res.status,
          //   message: JSON.stringify({
          //     url: res.url,
          //     statusText: res.statusText,
          //   }),
          //
          // })
        }
      })
      .catch(err => {
        // ctx.error({
        //   statusCode: 404,
        //   message: JSON.stringify(err)
        // })
      })

    if(docPageData){
      this.lazyDocs.push(docPageData)
    } else {
      this.lazyDocsIds.push(docId)
    }
    this.observer.observe(<Element>this.$refs.visibilityTarget);
  }

  mounted() {
    // console.log(this.$route.meta)
    // if(this.$route.meta?.id){
    //   alert(this.$route.meta?.id)
    // } else {
    //   alert(this.$route.params.id)
    // }
    console.log('this.docPageData', this.docPageData)

    let options = {
      rootMargin: '400px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,observer)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){

          // alert(nextDoc)
          if (this.lazyDocs.length <= 4 && this.lazyDocsIds.length){
            const nextDoc = this.lazyDocsIds.pop()
            if (nextDoc && nextDoc !== this.$route.params.id){
              this.fetchLazyDoc(nextDoc)
            } else if (this.lazyDocsIds.length){
              this.fetchLazyDoc(this.lazyDocsIds.pop()!)
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
