import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
import BlockquoteOfTheDay from "./BlockquoteOfTheDay/BlockquoteOfTheDay.vue";
import DigitOfTheDay from "./DigitOfTheDay/DigitOfTheDay.vue";
import VideoOfTheDay from "./VideoOfTheDay/VideoOfTheDay.vue";
import PhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDay.vue";
import GraphOfTheDay from "./GraphOfTheDay/GraphOfTheDay.vue";



@Component({
  components:{
    BlockquoteOfTheDay,
    DigitOfTheDay,
    GraphOfTheDay,
    PhotoOfTheDay,
    VideoOfTheDay
  }
})
export default class LightSpot extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) lightSpotData!: MainPageAPI.Endpoint_4['lightSpot'] | null;

  mounted(){
    console.log('this.lightSpotData',this.lightSpotData)
  }


}
