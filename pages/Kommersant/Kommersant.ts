import {Component, Vue} from 'nuxt-property-decorator'
import type {Context} from '@nuxt/types';
import type {Actualno as IActualno} from '~/interfaces/API/MainPageApi';
// import Cols from '@/components/oldGeneral/Cols/Cols'
import Actualno from '@/components/general/Actualno/Actualno.vue';
import {fetcher} from '@/helpers/fetcher';
import LazyHydrate from "vue-lazy-hydration";

@Component({
  components: {
    // Cols,
    Actualno,
    LazyHydrate
  }
})
export default class Kommersant extends Vue {
  // text: string = '';
  actualnoData: IActualno.APIDataStructure['data'] | null = null;

  async asyncData(ctx: Context) {

    ctx.res.timing?.start('act', 'actualnoData fetch')

    const actualnoData: IActualno.APIDataStructure =
      await fetcher('actualno')
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
          ctx.error({ statusCode: 404, message: JSON.stringify(err) })
        })

    ctx.res.timing?.end('act')

    return {
      actualnoData: actualnoData?.data || null,
    }
  }

  mounted() {
    // console.log('this.actualnoData',this.actualnoData)
  }
}
