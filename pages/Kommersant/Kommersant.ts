import { Component, Vue } from 'nuxt-property-decorator'
import {Context} from "@nuxt/types";
import Cols from '@/components/oldGeneral/Cols/Cols'

@Component({
  components:{
    Cols
  }
})
export default class Kommersant extends Vue {
  text: string = '';
  actualnoData: string = '';

  async asyncData(ctx:Context){
    // console.log(a.error({statusCode:400, message:'Some error message'}))
    // throw new Error()

    const actualnoData = await fetch('https://srdkprot.kommersant.ru/api/main_page/Endpoint_1')
      .then(res=>{
        if(res.ok){
          return res.json()
        }
      })
      .catch(err=>{
        ctx.error(err)
      })
    return {
      text: 'THIS IS PARENT PAGE WITH NESTED CHILDREN',
      actualnoData,
    }
  }
}
