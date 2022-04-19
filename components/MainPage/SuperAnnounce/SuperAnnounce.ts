import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
import DocSa from "./SaComponent/DocSa/DocSa";
import IssueSa from "./SaComponent/IssueSa/IssueSa";
import ThemeSa from "./SaComponent/ThemeSa/ThemeSa";
import CustomHtmlSa from "./SaComponent/CustomHtmlSa/CustomHtmlSa";



@Component({
  components:{
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

  mounted(){
    console.log('this.saData',this.saData)
  }


}
