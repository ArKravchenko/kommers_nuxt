import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'
// import Tg from './Tg/Tg.vue'
// import Vk from './Vk/Vk.vue'
// import Youtube from './Youtube/Youtube.vue'
// import Twitter from './Twitter/Twitter.vue'
// import Simplecast from './Simplecast/Simplecast.vue'


const Tg = () => import(
  /* webpackChunkName: "Tg." */
  /* webpackMode: "lazy" */
  "./Tg/Tg.vue");
const Vk = () => import(
  /* webpackChunkName: "Vk." */
  /* webpackMode: "lazy" */
  "./Vk/Vk.vue");
const Youtube = () => import(
  /* webpackChunkName: "Youtube." */
  /* webpackMode: "lazy" */
  "./Youtube/Youtube.vue");
const Twitter = () => import(
  /* webpackChunkName: "Twitter." */
  /* webpackMode: "lazy" */
  "./Twitter/Twitter.vue");
const Simplecast = () => import(
  /* webpackChunkName: "Youtube." */
  /* webpackMode: "lazy" */
  "./Simplecast/Simplecast.vue");

//TODO make runScripts mixin for all socials
@Component({
  // name is required for recursive components as Socials uses DocBodyElement and vice versa
  name: 'Socials',
  components: {
    // HtmlTagElement,
    Tg,
    Vk,
    Youtube,
    Twitter,
    Simplecast,
  }
})
export default class Socials extends Vue {
  @Prop({
    // type: Object,
    // required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) socialsWidgetData!: ArticleLong.Socials | null;

  cdnUrl: string = process.env.CDN_URL || '';

  get getSocialType(){
    return this.socialsWidgetData?.socialType
  }

  observer!: IntersectionObserver;

  visible: boolean = false;


  mounted() {
    let options = {
      rootMargin: '200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,observer)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){
          this.visible = true;
          observer.disconnect()
        }
      })
    }, options);

    this.observer.observe(<Element>this.$refs.visibilityTarget);
    // console.log('this.socialsWidgetData',this.socialsWidgetData)
  }

  beforeUnmount(){
    this.observer.disconnect();
  }


}
