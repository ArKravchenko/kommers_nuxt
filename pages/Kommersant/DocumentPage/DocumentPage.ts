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


import ArticleLongContent from '~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue'






@Component({
  components: {
    // Cols,
    Promo,
    CompanyNews,
    ArticleLongContent,
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
      = await fetcher('docPageData',{
      query: {
        docId,
      }
    }).then(res=>{
      if (res.ok) {
        return res.json()
      }
    }).catch(err=>{
      ctx.error({ statusCode: 404, message: JSON.stringify(err,null,2) })
    })



    if(process.server) {
      ctx.store.commit('setApiToSsrReceived', Date.now())
    }
    return {
      docPageData,
    }
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


  mounted() {
    // console.log(this.$route.meta)
    // if(this.$route.meta?.id){
    //   alert(this.$route.meta?.id)
    // } else {
    //   alert(this.$route.params.id)
    // }
    // console.log('this.listPageWidgets', this.listPageWidgets)
    console.log('this.docPageData', this.docPageData)
  }

}
