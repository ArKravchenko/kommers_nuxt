import {Component, Prop, Vue} from 'nuxt-property-decorator'
import Crumbs from './../Crumbs/Crumbs';


@Component({
  // @ts-ignore
  serverCacheKey(a:any) {
    return 'ServiceMenu'
  },
  components:{
    Crumbs
  }
})
export default class ServiceMenu extends Vue {
  // @Prop({
  //   type: Object,
  //   required: true,
  //   default: null,
  //   validator(value: IActualno.APIDataStructure['data']): boolean {
  //     return !!value.rates && !!value.items
  //   }
  // }) actualnoData!: IActualno.APIDataStructure['data'] | null;

  isServiceMenuOpen: boolean = false;

  isServiceMenuOpenToggle() {
    this.isServiceMenuOpen = !this.isServiceMenuOpen
  }


  // mounted() {
  //   console.log(this.actualnoData)
  // }
}
