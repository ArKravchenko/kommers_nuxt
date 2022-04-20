import {Component, Vue} from 'nuxt-property-decorator'
import {Context} from "@nuxt/types";
import type {ListPageAPI} from "~/interfaces/API/MainPageApi";
// import type {AsyncComponent} from 'vue'
import {fetcher} from "~/helpers/fetcher";
// import {ArticleLong} from "~/interfaces/API/MainPageApi";
// import Cols from '~/components/general/Cols/Cols.vue'



@Component({
  components: {
    // Cols,
  },
})
export default class ListPage extends Vue {
  listPageData: ListPageAPI.Endpoint_4 | null = null;

  async asyncData(ctx: Context) {

    const listPageData: ListPageAPI.Endpoint_4 = await fetcher('listPageWidgets')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .catch(err => {
        ctx.error({ statusCode: 404, message: err })
      })
    return {
      listPageData,
    }
  }



  mounted(){
    console.log(this.$route.meta)
    if(this.$route.meta?.id){
      alert(this.$route.meta?.id)
    } else {
      alert(this.$route.params.id)
    }
    console.log('this.listPageData',this.listPageData)
  }

}
