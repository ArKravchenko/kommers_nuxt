import { Component, Vue } from 'nuxt-property-decorator'

@Component({
})
export default class Parent extends Vue {
  text: string = '';
  async asyncData(a:any){
    // console.log(a.error({statusCode:400, message:'Some error message'}))
    // throw new Error()
    return {
      text: 'THIS IS PARENT PAGE WITH NESTED CHILDREN'
    }
  }
}
