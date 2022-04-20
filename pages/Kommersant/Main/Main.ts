import {Component, Vue} from 'nuxt-property-decorator'
import {Context} from "@nuxt/types";
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
// import type {AsyncComponent} from 'vue'
import {fetcher} from "~/helpers/fetcher";
// import {ArticleLong} from "~/interfaces/API/MainPageApi";
// import Cols from '~/components/general/Cols/Cols.vue'
import SuperAnnounce from '~/components/MainPage/SuperAnnounce/SuperAnnounce.vue'
import TopNews from '~/components/MainPage/TopNews/TopNews.vue'
import LightSpot from '~/components/MainPage/LightSpot/LightSpot.vue'
import MainToday from '~/components/MainPage/MainToday/MainToday.vue'
import Opinions from '~/components/MainPage/Opinions/Opinions.vue'
import Promo from '~/components/general/Promo/Promo.vue'
import SpendTime from '~/components/MainPage/SpendTime/SpendTime.vue'
import Rubric from '~/components/MainPage/Rubric/Rubric.vue'
import Vote from '~/components/MainPage/Vote/Vote.vue'
import MostReadableAside from '~/components/MainPage/MostReadableAside/MostReadableAside.vue'
import SpendGallery from '~/components/MainPage/SpendGallery/SpendGallery.vue'
import CompanyNews from '~/components/MainPage/CompanyNews/CompanyNews.vue'
import Multimedia from '~/components/MainPage/Multimedia/Multimedia.vue'

// const MainToday: AsyncComponent = () => import(/* webpackChunkName: "MainToday" */'~/components/MainPage/MainToday/MainToday.vue')
// const Opinions: AsyncComponent = () => import(/* webpackChunkName: "Opinions" */'~/components/MainPage/Opinions/Opinions.vue')
// const Multimedia: AsyncComponent = () => import(/* webpackChunkName: "Multimedia" */'~/components/MainPage/Multimedia/Multimedia.vue')
// const CompanyNews: AsyncComponent = () => import(/* webpackChunkName: "CompanyNews" */'~/components/MainPage/CompanyNews/CompanyNews.vue')
// const Rubric: AsyncComponent = () => import(/* webpackChunkName: "Rubric" */'~/components/MainPage/Rubric/Rubric.vue')
// const MostReadableAside: AsyncComponent = () => import(/* webpackChunkName: "MostReadableAside" */'~/components/MainPage/MostReadableAside/MostReadableAside.vue')
// const Vote: AsyncComponent = () => import(/* webpackChunkName: "Vote" */'~/components/MainPage/Vote/Vote.vue')
// const SpendGallery: AsyncComponent = () => import(/* webpackChunkName: "SpendGallery" */'~/components/MainPage/SpendGallery/SpendGallery.vue')
// const SpendTime: AsyncComponent = () => import(/* webpackChunkName: "SpendTime" */'~/components/MainPage/SpendTime/SpendTime.vue')
// const Promo: AsyncComponent = () => import(/* webpackChunkName: "Promo" */'~/components/general/Promo/Promo.vue')


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

  get getSaPrimary(){
    return this.mainPageWidgets
      && this.mainPageWidgets.superAnnounce
      && this.mainPageWidgets.superAnnounce.data
      && this.mainPageWidgets.superAnnounce.data.primary
  }

  get getSaSecondary(){
    return this.mainPageWidgets
      && this.mainPageWidgets.superAnnounce
      && this.mainPageWidgets.superAnnounce.data
      && this.mainPageWidgets.superAnnounce.data.secondary
  }

  get getLightSpot(){
    return this.mainPageWidgets
      && this.mainPageWidgets.lightSpot
  }

  get getTop(){
    return this.mainPageWidgets
      && this.mainPageWidgets.top
  }

  get getMainToday(){
    return this.mainPageWidgets
      && this.mainPageWidgets.mainToday
  }

  get getOpinions(){
    return this.mainPageWidgets
      && this.mainPageWidgets.opinions
  }

  get getMultimedia(){
    return this.mainPageWidgets
      && this.mainPageWidgets.multimedia
  }

  get getRubrics(){
    return this.mainPageWidgets
      && this.mainPageWidgets.rubrics
      && this.mainPageWidgets.rubrics.data
      && this.mainPageWidgets.rubrics.data.rubrics
  }

  get getSpendTime(){
    return this.mainPageWidgets
      && this.mainPageWidgets.spendTime

  }

  mounted(){
    console.log('this.mainPageWidgets',this.mainPageWidgets)
  }

}
