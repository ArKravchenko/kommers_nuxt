import { Component, Vue } from 'nuxt-property-decorator'
import {Context} from "@nuxt/types";

@Component({
})
export default class Kommersant extends Vue {
  text: string = '';
  async asyncData(a:Context){
    // console.log(a.error({statusCode:400, message:'Some error message'}))
    // throw new Error()
    return {
      text: 'THIS IS PARENT PAGE WITH NESTED CHILDREN'
    }
  }
}
