import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {SpendTime as ISpendTime} from "~/interfaces/API/MainPageApi";
// import Picture from "~/components/general/Picture/Picture";
// import type {ArticleLong} from "~/interfaces/API/MainPageApi";

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];


@Component({
  //@ts-ignore
  serverCacheKey(a: any) {
    // console.log(a)
    // return false
    return a.spendTimeData?.dataHash ? a.spendTimeData.dataHash : JSON.stringify(a)
  },
  components: {
    // Picture
  },
})
export default class SpendTime extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) spendTimeData!: ISpendTime.ISpendTime | null;

  // cdnUrl: string = process.env.CDN_URL || ''

  get getSizes(){
    return '(min-width: 1198px) 520px, (min-width: 640px) 640px'
  }

  getNoscriptString(item: ArrayElement<ISpendTime.ISpendTime['data']['docs']>): string {
    return `<img class="spend__img fallback_image"
                     src="${item.img.src}"
                     alt="${item.img.alt}"
                >`
  }

//					<img class="spend__img" src="https://im.kommersant.ru/Issues.photo/LifeStyle_News/2021/01/29/KLS_001418_00007_1_t233_153027.jpg" alt="На&#160;сайте Farfetch появились украшения David Morris" />
  mounted() {
    // console.log('this.spendTimeData', this.spendTimeData)
  }


}
