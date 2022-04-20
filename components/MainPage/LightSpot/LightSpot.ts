import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MainPageAPI} from "~/interfaces/API/MainPageApi";
import type {AsyncComponent} from 'vue'
// import BlockquoteOfTheDay from "./BlockquoteOfTheDay/BlockquoteOfTheDay.vue";
// import DigitOfTheDay from "./DigitOfTheDay/DigitOfTheDay.vue";
// import VideoOfTheDay from "./VideoOfTheDay/VideoOfTheDay.vue";
// import PhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDay.vue";
// import GraphOfTheDay from "./GraphOfTheDay/GraphOfTheDay.vue";

const GraphOfTheDay:AsyncComponent = () => import(/* webpackChunkName: "GraphOfTheDay" */"./GraphOfTheDay/GraphOfTheDay.vue");
const DigitOfTheDay:AsyncComponent = () => import(/* webpackChunkName: "DigitOfTheDay" */"./DigitOfTheDay/DigitOfTheDay.vue");
const VideoOfTheDay:AsyncComponent = () => import(/* webpackChunkName: "VideoOfTheDay" */"./VideoOfTheDay/VideoOfTheDay.vue");
const PhotoOfTheDay:AsyncComponent = () => import(/* webpackChunkName: "PhotoOfTheDay" */"./PhotoOfTheDay/PhotoOfTheDay.vue");
const BlockquoteOfTheDay:AsyncComponent = () => import(/* webpackChunkName: "BlockquoteOfTheDay" */"./BlockquoteOfTheDay/BlockquoteOfTheDay.vue");


@Component({
  components: {
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

  mounted() {
    console.log('this.lightSpotData', this.lightSpotData)
  }


}
