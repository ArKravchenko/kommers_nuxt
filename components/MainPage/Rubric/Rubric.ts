import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Rubrics} from "~/interfaces/API/MainPageApi";



@Component({
  //@ts-ignore
  serverCacheKey(a:any) {
    // console.log(a)
    // return false
    return JSON.stringify(a)
  },
})
export default class Rubric extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) rubricData!: Rubrics.Rubric | null;

  cdnUrl: string = process.env.CDN_URL || ''

  get getFirst(){
    return this.rubricData?.docs[0]
  }

  get getRest(){
    return this.rubricData?.docs.slice(1)
  }

  get getFirstImgNoscriptString(){
    return `
    <img class="uho__img fallback_image"
    src="${this.getFirst?.img.src}"
    alt="${this.getFirst?.img.alt}">`
  }

  mounted(){
     // console.log('this.rubricData',this.rubricData)
  }


}
