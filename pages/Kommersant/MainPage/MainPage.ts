import {Component, Vue} from 'nuxt-property-decorator'
import type {Context} from "@nuxt/types";
import type {
  MainPageAPI,
  CompanyNews as ICompanyNews,
  PromoGalleryTop,
} from "~/interfaces/API/MainPageApi";
// import type {AsyncComponent} from 'vue'
import {fetcher} from "~/helpers/fetcher";
// import {ArticleLong} from "~/interfaces/API/MainPageApi";
// import Cols from '~/components/general/Cols/Cols.vue'
import SuperAnnounce from '~/components/MainPage/SuperAnnounce/SuperAnnounce.vue'
import TopNews from '~/components/MainPage/TopNews/TopNews.vue'
// import LightSpot from '~/components/MainPage/LightSpot/LightSpot.vue'
// import LightSpot from '~/components/MainPage/LightSpot/LightSpotSwiperTest/LightSpotSwiperTest.vue'
import MainToday from '~/components/MainPage/MainToday/MainToday.vue'
import Opinions from '~/components/MainPage/Opinions/Opinions.vue'
import Promo from '~/components/general/Promo/Promo.vue'
// const Banner = () => import(
//   /* webpackChunkName: "Banner." */
//   /* webpackMode: "eager" */
//   "@/components/general/Banner/Banner.vue");

// TODO keep imports in the same order on every page or replace with lazy pages
import SpendTime from '~/components/MainPage/SpendTime/SpendTime.vue'
import Rubric from '~/components/MainPage/Rubric/Rubric.vue'
import Vote from '~/components/MainPage/Vote/Vote.vue'
// import MostReadableAside from '~/components/MainPage/MostReadableAside/MostReadableAside.vue';
const MostReadableAside = () => import(
  /* webpackChunkName: "MostReadableAside" */
  /* webpackMode: "lazy" */
  "~/components/MainPage/MostReadableAside/MostReadableAside.vue");
import SpendGallery from '~/components/MainPage/SpendGallery/SpendGallery.vue'
import CompanyNews from '~/components/MainPage/CompanyNews/CompanyNews.vue'
// import Multimedia from '~/components/MainPage/Multimedia/Multimedia.vue'
// import Multimedia from '~/components/MainPage/Multimedia/MultimediaSwiperTest/MultimediaSwiperTest.vue';
const Multimedia = () => import(
  /* webpackChunkName: "Multimedia." */
  /* webpackMode: "lazy" */
  "~/components/MainPage/Multimedia/MultimediaSwiperTest/MultimediaSwiperTest.vue");
const LightSpot = () => import(
  /* webpackChunkName: "LightSpot" */
  /* webpackMode: "lazy" */
  "~/components/MainPage/LightSpot/LightSpotSwiperTest/LightSpotSwiperTest.vue");

// const MainToday: AsyncComponent = () => import('~/components/MainPage/MainToday/MainToday.vue')
// const Opinions: AsyncComponent = () => import('~/components/MainPage/Opinions/Opinions.vue')
// const Multimedia: AsyncComponent = () => import('~/components/MainPage/Multimedia/Multimedia.vue')
// const CompanyNews: AsyncComponent = () => import('~/components/MainPage/CompanyNews/CompanyNews.vue')
// const Rubric: AsyncComponent = () => import('~/components/MainPage/Rubric/Rubric.vue')
// const MostReadableAside: AsyncComponent = () => import('~/components/MainPage/MostReadableAside/MostReadableAside.vue')
// const Vote: AsyncComponent = () => import('~/components/MainPage/Vote/Vote.vue')
// const SpendGallery: AsyncComponent = () => import('~/components/MainPage/SpendGallery/SpendGallery.vue')
// const SpendTime: AsyncComponent = () => import('~/components/MainPage/SpendTime/SpendTime.vue')
// const Promo: AsyncComponent = () => import('~/components/general/Promo/Promo.vue')


@Component({
  components: {
    // Cols,
    SuperAnnounce,
    TopNews,
    LightSpot,
    MainToday,
    Opinions,
    Promo,
    SpendTime,
    Rubric,
    Vote,
    MostReadableAside,
    SpendGallery,
    CompanyNews,
    Multimedia,
    // Banner
  },
})
export default class MainPage extends Vue {
  mainPageWidgets: MainPageAPI.Endpoint_4 | null = null;
  companyNewsData: ICompanyNews.ICompanyNews | null = null;
  spendGalleryTopData: PromoGalleryTop.PromoDoc | null = null;
  spendGalleryBottomData: PromoGalleryTop.PromoDoc | null = null;

  async asyncData(ctx: Context) {

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

    const mainPageWidgetsPromise: Promise<MainPageAPI.Endpoint_4> =
       fetcher('mainPageWidgets')
        .then(handleRes)
        .catch(errorCatch404)

    const companyNewsDataPromise: Promise<ICompanyNews.ICompanyNews>
      = fetcher('companyNews')
      .then(handleRes)
      .catch(errorCatch404)

    const spendGalleryTopDataPromise: Promise<PromoGalleryTop.IPromoGallery>
      = fetcher('spendGalleryTop')
      .then(handleRes)
      .catch(errorCatch404)

    const spendGalleryBottomDataPromise: Promise<PromoGalleryTop.IPromoGallery>
      = fetcher('spendGalleryBottom')
      .then(handleRes)
      .catch(errorCatch404)

    const [
      mainPageWidgets,
      companyNewsData,
      spendGalleryTopData,
      spendGalleryBottomData
    ] = await Promise.all([
      mainPageWidgetsPromise,
      companyNewsDataPromise,
      spendGalleryTopDataPromise,
      spendGalleryBottomDataPromise
    ])

    if (process.server) {
      ctx.store.commit('setApiToSsrReceived', Date.now())
    }

    return {
      mainPageWidgets,
      companyNewsData,
      spendGalleryTopData,
      spendGalleryBottomData
    }
  }

  get getSaPrimary() {
    return this.mainPageWidgets
      && this.mainPageWidgets.superAnnounce
      && this.mainPageWidgets.superAnnounce.data
      && this.mainPageWidgets.superAnnounce.data.primary
  }

  get getSaSecondary() {
    return this.mainPageWidgets
      && this.mainPageWidgets.superAnnounce
      && this.mainPageWidgets.superAnnounce.data
      && this.mainPageWidgets.superAnnounce.data.secondary
  }

  get getLightSpot() {
    return this.mainPageWidgets
      && this.mainPageWidgets.lightSpot
  }

  get getTop() {
    return this.mainPageWidgets
      && this.mainPageWidgets.top
  }

  get getMainToday() {
    return this.mainPageWidgets
      && this.mainPageWidgets.mainToday
  }

  get getOpinions() {
    return this.mainPageWidgets
      && this.mainPageWidgets.opinions
  }

  get getMultimedia() {
    return this.mainPageWidgets
      && this.mainPageWidgets.multimedia
  }

  get getRubrics() {
    return this.mainPageWidgets
      && this.mainPageWidgets.rubrics
      && this.mainPageWidgets.rubrics.data
      && this.mainPageWidgets.rubrics.data.rubrics
  }

  get getSpendTime() {
    return this.mainPageWidgets
      && this.mainPageWidgets.spendTime
  }

  get lazyHydrateWhenVisibleParams(){
    return { rootMargin: '400px' }
  }

  mounted() {
    console.log('this.mainPageWidgets', this.mainPageWidgets)
  }

}
