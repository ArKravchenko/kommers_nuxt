import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {Actualno as IActualno} from "~/interfaces/API/MainPageApi";



@Component({})
export default class Actualno extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    validator(value: IActualno.APIDataStructure['data']): boolean {
      return !!value.rates && !!value.items
    }
  }) actualnoData!: IActualno.APIDataStructure['data'] | null;

  indices = {
    'usd': '$',
    'eur': '€',
    'moex': 'IMOEX'
  }

  getTrendClass(item: IActualno.APIDataStructure['data']['rates']['usd' | 'eur' | 'moex']) {
    switch (item.changeTrend) {
      case 1:
        return 'actual__raise';
      case -1:
        return 'actual__fall'
      default:
        return ''
    }
  }


  // mounted() {
  //   console.log(this.actualnoData)
  // }
}
