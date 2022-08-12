import {Component, Vue} from 'nuxt-property-decorator'
import type {Context} from "@nuxt/types";
import type {ListPageAPI, CompanyNews as ICompanyNews} from "~/interfaces/API/MainPageApi";
// import type {AsyncComponent} from 'vue'
import {fetcher} from "~/helpers/fetcher";
// import {ArticleLong} from "~/interfaces/API/MainPageApi";
// import Cols from '~/components/general/Cols/Cols.vue'

// TODO keep imports in the same order on every page or replace with lazy pages;

// import SuperAnnounce from '~/components/MainPage/SuperAnnounce/SuperAnnounce.vue'
import TopNews from '~/components/MainPage/TopNews/TopNews.vue'
// import LightSpot from '~/components/MainPage/LightSpot/LightSpotSwiperTest/LightSpotSwiperTest.vue'
import Opinions from '~/components/MainPage/Opinions/Opinions.vue'
import Promo from '~/components/general/Promo/Promo.vue'

import Rubric from '~/components/MainPage/Rubric/Rubric.vue'
import CompanyNews from '~/components/MainPage/CompanyNews/CompanyNews.vue'


// import Multimedia from '~/components/MainPage/Multimedia/Multimedia.vue'
const Multimedia = () => import(
  /* webpackChunkName: "Multimedia." */
  /* webpackMode: "lazy" */
  "~/components/MainPage/Multimedia/MultimediaSwiperTest/MultimediaSwiperTest.vue");
const LightSpot = () => import(
  /* webpackChunkName: "LightSpot" */
  /* webpackMode: "lazy" */
  "~/components/MainPage/LightSpot/LightSpotSwiperTest/LightSpotSwiperTest.vue");

import ServiceMenu from '~/components/ListPage/ServiceMenu/ServiceMenu.vue'
import ListPageDocs from '~/components/ListPage/ListPageDocs/ListPageDocs.vue'
// const Banner = () => import(
//   /* webpackChunkName: "Banner." */
//   /* webpackMode: "eager" */
//   "@/components/general/Banner/Banner.vue");


@Component({
  components: {
    // Cols,
    Promo,
    ServiceMenu,
    Opinions,
    CompanyNews,
    TopNews,
    LightSpot,
    Multimedia,
    ListPageDocs,
    // SuperAnnounce,
    Rubric
    // Banner
  },
})
export default class ListPage extends Vue {
  listPageWidgets: ListPageAPI.Endpoint_4 | null = null;
  listPageDocs: ListPageAPI.Endpoint_6 | null = null;
  companyNewsData: ICompanyNews.ICompanyNews | null = null;


  async asyncData(ctx: Context) {
    // TODO replace tagId with route params or route meta
    // TODO add rubric title ,breadcrumb and link, (other metadata)
    // TODO опечатка в listPageWidgets.opinions
    // TODO listPageWidgets.mainToday заменить на данные как у среза рубрики

    const tagId = ctx.route.params.id
    const type = ctx.route.params.type
    // console.log(ctx.route.params.id)

    if (process.server) {
      ctx.store.commit('setSsrToApiSent', Date.now())
    }

    const errorCatch404 = (err: Error) => {
      ctx.error({
        statusCode: 404,
        message: JSON.stringify(err)
      })
    }

    const handleRes = (res: Response) => {
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

    const listPageWidgetsPromise: Promise<ListPageAPI.Endpoint_4>
      = fetcher('listPageWidgets', {
      // query: {
      //   tagId,
      // },
      path: [
        type,
        tagId
      ]
    })
      .then(handleRes)
      .catch(errorCatch404)


    const listPageDocsPromise: Promise<ListPageAPI.Endpoint_6>
      = fetcher('listPageDocs', {
      query: {
        // tagId,
        count: 20
      },
      path: [
        type,
        tagId
      ]
    })
      .then(handleRes)
      .catch(errorCatch404)

    const companyNewsDataPromise: Promise<ICompanyNews.ICompanyNews>
      = fetcher('companyNews')
      .then(handleRes)
      .catch(errorCatch404)

    const [
      listPageWidgets,
      listPageDocs,
      companyNewsData
    ] = await Promise.all([listPageWidgetsPromise, listPageDocsPromise, companyNewsDataPromise])

    if (process.server) {
      ctx.store.commit('setApiToSsrReceived', Date.now())
    }
    return {
      listPageWidgets,
      listPageDocs,
      companyNewsData
    }
  }

  cdnUrl: string = process.env.CDN_URL || '';

  get getOpinions() {
    return this.listPageWidgets
      && this.listPageWidgets.opinions
  }

  get getTop() {
    return this.listPageWidgets
      && this.listPageWidgets.top
  }

  get getLightSpot() {
    return this.listPageWidgets
      && this.listPageWidgets.lightSpot
  }

  get getMultimedia() {
    return this.listPageWidgets
      && this.listPageWidgets.multimedia
  }

  // get getSuperAnnounce() {
  //   return this.listPageWidgets
  //     && this.listPageWidgets.superAnnounce
  // }

  get getMainToday() {
    return this.listPageWidgets
      && this.listPageWidgets.mainToday
  }

  get getWidgetsSorted() {
    type Item = {widgetName: 'top' | 'lightSpot' | 'multimedia' | 'mainToday' | 'opinions'}
      & {order: number};

    const orderOrInfinity = (getter?: {order: number; [key: string]: any} | null) => {
      return getter?.order || Infinity
    }

    const widgets:Array<Item> = [];
    widgets.push({
      widgetName: 'top',
      order: orderOrInfinity(this.getTop)
    });
    this.getLightSpot && widgets.push({
      widgetName: 'lightSpot',
      order: orderOrInfinity(this.getLightSpot)
    });
    this.getMultimedia && widgets.push({
      widgetName: 'multimedia',
      order: orderOrInfinity(this.getMultimedia)
    });
    this.getMainToday && widgets.push({
      widgetName: 'mainToday',
      order: orderOrInfinity(this.getMainToday)
    });
    this.getOpinions && widgets.push({
      widgetName: 'opinions',
      order: orderOrInfinity(this.getOpinions)
    });

    return widgets.sort((a: Item, b: Item) => a.order - b.order)
  }

  get getTitle() {
    return this.listPageWidgets?.pageData?.title
      && this.listPageWidgets.pageData.title
  }

  get getDescription() {
    return this.listPageWidgets?.pageData?.description
      && this.listPageWidgets.pageData.description
  }

  get getMainPhoto() {
    return this.listPageWidgets?.pageData?.mainPhoto
      && this.listPageWidgets.pageData.mainPhoto
  }


  mounted() {
    // console.log(this.$route.meta)
    // if(this.$route.meta?.id){
    //   alert(this.$route.meta?.id)
    // } else {
    //   alert(this.$route.params.id)
    // }
    console.log('this.listPageWidgets', this.listPageWidgets);
    // console.log(this.$route.params)
    // console.log('this.listPageDocs', this.listPageDocs)
  }

}
