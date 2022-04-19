import {Component, Vue} from 'nuxt-property-decorator'
import {Context} from "@nuxt/types";
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";
// import {ArticleLong} from "~/interfaces/API/MainPageApi";
// import Cols from '~/components/general/Cols/Cols.vue'
import SuperAnnounce from '~/components/MainPage/SuperAnnounce/SuperAnnounce.vue'
import TopNews from '~/components/MainPage/TopNews/TopNews.vue'
import LightSpot from '~/components/MainPage/LightSpot/LightSpot.vue'
// import MainToday from '~/components/MainPage/MainToday/MainToday.vue'
// import Opinions from '~/components/MainPage/Opinions/Opinions.vue'
// import Promo from '~/components/general/Promo/Promo.vue'
// import SpendTime from '~/components/MainPage/SpendTime/SpendTime.vue'
// import Rubric from '~/components/MainPage/Rubric/Rubric.vue'
// import Vote from '~/components/MainPage/Vote/Vote.vue'
// import MostReadableAside from '~/components/MainPage/MostReadableAside/MostReadableAside.vue'
// import SpendGallery from '~/components/MainPage/SpendGallery/SpendGallery.vue'
// import CompanyNews from '~/components/MainPage/CompanyNews/CompanyNews.vue'
// import Multimedia from '~/components/MainPage/Multimedia/Multimedia.vue'

const MainToday = () => import(/* webpackChunkName: "MainToday" */'~/components/MainPage/MainToday/MainToday.vue')
const Opinions = () => import(/* webpackChunkName: "Opinions" */'~/components/MainPage/Opinions/Opinions.vue')
const Multimedia = () => import(/* webpackChunkName: "Multimedia" */'~/components/MainPage/Multimedia/Multimedia.vue')
const CompanyNews = () => import(/* webpackChunkName: "CompanyNews" */'~/components/MainPage/CompanyNews/CompanyNews.vue')
const Rubric = () => import(/* webpackChunkName: "Rubric" */'~/components/MainPage/Rubric/Rubric.vue')
const MostReadableAside = () => import(/* webpackChunkName: "MostReadableAside" */'~/components/MainPage/MostReadableAside/MostReadableAside.vue')
const Vote = () => import(/* webpackChunkName: "Vote" */'~/components/MainPage/Vote/Vote.vue')
const SpendGallery = () => import(/* webpackChunkName: "SpendGallery" */'~/components/MainPage/SpendGallery/SpendGallery.vue')
const SpendTime = () => import(/* webpackChunkName: "SpendTime" */'~/components/MainPage/SpendTime/SpendTime.vue')
const Promo = () => import(/* webpackChunkName: "Promo" */'~/components/general/Promo/Promo.vue')


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
    Multimedia
  },
})
export default class Main extends Vue {
  mainPageWidgets: MainPageAPI.Endpoint_4 | null = null;

  async asyncData(ctx: Context) {

    const mainPageWidgets: MainPageAPI.Endpoint_4 = await fetcher('mainPageWidgets')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .catch(err => {
        ctx.error({ statusCode: 404, message: err })
      })
    return {
      mainPageWidgets,
    }
  }

  mounted(){
    console.log('this.mainPageWidgets',this.mainPageWidgets)
  }

}
