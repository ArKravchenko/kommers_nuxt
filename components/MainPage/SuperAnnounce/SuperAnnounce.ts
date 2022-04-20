import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {AsyncComponent} from 'vue'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
// import DocSa from "./SaComponent/DocSa/DocSa";
// import IssueSa from "./SaComponent/IssueSa/IssueSa";
// import ThemeSa from "./SaComponent/ThemeSa/ThemeSa";
// import CustomHtmlSa from "./SaComponent/CustomHtmlSa/CustomHtmlSa";

const DocSa: AsyncComponent = () => import(/* webpackChunkName: "DocSa" */'./SaComponent/DocSa/DocSa')
const IssueSa: AsyncComponent = () => import(/* webpackChunkName: "IssueSa" */'./SaComponent/IssueSa/IssueSa')
const ThemeSa: AsyncComponent = () => import(/* webpackChunkName: "ThemeSa" */'./SaComponent/ThemeSa/ThemeSa')
const CustomHtmlSa: AsyncComponent = () => import(/* webpackChunkName: "CustomHtmlSa" */'./SaComponent/CustomHtmlSa/CustomHtmlSa')


@Component({
  //@ts-ignore
  serverCacheKey(a: any) {
    // console.log(a)
    // return false
    return JSON.stringify(a)
  },
  components: {
    DocSa,
    IssueSa,
    ThemeSa,
    CustomHtmlSa,
  }
})
export default class SuperAnnounce extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) saData!: MainPageAPI.Endpoint_4['superAnnounce'] | null;

  mounted() {
    console.log('this.saData', this.saData)
  }


}
