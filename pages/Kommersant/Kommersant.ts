import {Component, Vue} from 'nuxt-property-decorator'
import {Context} from '@nuxt/types';
import type {Actualno as IActualno} from '~/interfaces/API/MainPageApi';
// import Cols from '@/components/oldGeneral/Cols/Cols'
import Actualno from '@/components/general/Actualno/Actualno';
import {fetcher} from '@/helpers/fetcher';

@Component({
  components: {
    // Cols,
    Actualno
  }
})
export default class Kommersant extends Vue {
  // text: string = '';
  actualnoData: IActualno.APIDataStructure['data'] | null = null;

  async asyncData(ctx: Context) {
    const actualnoData: IActualno.APIDataStructure = await fetcher('actualno')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .catch(err => {
        ctx.error({ statusCode: 404, message: err })
      })
    return {
      // text: 'THIS IS PARENT PAGE WITH NESTED CHILDREN',
      actualnoData: actualnoData?.data || null,
    }
  }
  mounted(){
    console.log('kommersamt component props',this.$props)
  }
}
