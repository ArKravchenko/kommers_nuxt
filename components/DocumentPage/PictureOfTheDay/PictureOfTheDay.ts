import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Top, ArticleLong} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";

@Component({
  // // @ts-ignore
  // serverCacheKey(a: any) {
  //   // console.log(a)
  //   // return false
  //   return a.regionId
  // },
  components: {},
  fetchOnServer: false,
})
export default class PictureOfTheDay extends Vue {
  @Prop({
    type: Number,
    required: true,
    default: 77,
  }) regionId!: ArticleLong.IArticleLong['data']['regionId'];

  pictureOfTheDayData: Top.Doc[] = [];

  async fetch(){
    return fetcher('pictureOfTheDay', {
      query: {
        type: 3,
        id: this.regionId
      }
    }).then((res:Response) => {
      if (res.ok) {
        return res.json()
      } else {
        console.error('Error fetching pictureOfTheDay data', res.status)
      }
    }).then((data:Top.Doc[])=>{
      this.pictureOfTheDayData = data;
      // console.log('pictureOfTheDay',data)
    })
      .catch((err:Error)=>{
      console.error(err)
    })
  }

  expanded = false;

  expandHandler() {
    this.expanded = true;
  }

  mounted() {
    // this.$fetch()
    // console.log('this.pictureOfTheDayData', this.pictureOfTheDayData)
  }


}
