import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";

// import Para from "./Widgets/Para/Para.vue";
// import Vvodka from "./Widgets/Vvodka/Vvodka.vue";
// import Title2 from "./Widgets/Title2/Title2.vue";
// import Incut from "./Widgets/Incut/Incut.vue";
// import List from "./Widgets/List/List.vue";
// import Spravka from "./Widgets/Spravka/Spravka.vue";
// import AdaptivePhoto from "./Widgets/AdaptivePhoto/AdaptivePhoto.vue";
// import Citation from "./Widgets/Citation/Citation.vue";
// import Illustration from "./Widgets/Illustration/Illustration.vue";
import LazyHydrate from 'vue-lazy-hydration'


// these imports MUST be lazy (promise wrapped) because it's needed to avoid cross-recursive components' conflicts
const Vvodka = () => import(/* webpackMode: "eager" */"./Widgets/Vvodka/Vvodka.vue");
const Title2 = () => import(/* webpackMode: "eager" */"./Widgets/Title2/Title2.vue");
const Para = () => import(/* webpackMode: "eager" */"./Widgets/Para/Para.vue");

const Incut = () => import(
  /* webpackChunkName: "Incut." */
  /* webpackMode: "lazy" */
  "./Widgets/Incut/Incut.vue");
const List = () => import(
  /* webpackChunkName: "List." */
  /* webpackMode: "lazy" */
  "./Widgets/List/List.vue");
const Spravka = () => import(
  /* webpackChunkName: "Spravka." */
  /* webpackMode: "lazy" */
  "./Widgets/Spravka/Spravka.vue");
const AdaptivePhoto = () => import(
  /* webpackChunkName: "AdaptivePhoto." */
  /* webpackMode: "lazy" */
  "./Widgets/AdaptivePhoto/AdaptivePhoto.vue");
const Citation = () => import(
  /* webpackChunkName: "Citation." */
  /* webpackMode: "lazy" */
  "./Widgets/Citation/Citation.vue");
const Illustration = () => import(
  /* webpackChunkName: "Illustration." */
  /* webpackMode: "lazy" */
  "./Widgets/Illustration/Illustration.vue");




@Component({
  // name is required for recursive components as WidgetElement
  // uses widgets and some widgets could use DocBodyElement and WidgetElement
  name: 'WidgetElement',
  components: {
    Para,
    Vvodka,
    Title2,
    Incut,
    List,
    Spravka,
    AdaptivePhoto,
    Citation,
    Illustration,
    LazyHydrate
  }
})
export default class WidgetElement extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) widgetElement!: ArticleLong.WidgetElement | null;

}
