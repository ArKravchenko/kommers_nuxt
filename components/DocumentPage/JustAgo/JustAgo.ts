import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {
  DocPageAPI,
  Multimedia as IMultimedia
} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";


const Promo = () => import(
  /* webpackChunkName: "Promo." */
  /* webpackMode: "lazy" */
  "~/components/general/Promo/Promo.vue");
const Multimedia = () => import(
  /* webpackChunkName: "Multimedia." */
  /* webpackMode: "lazy" */
  "~/components/MainPage/Multimedia/MultimediaSwiperTest/MultimediaSwiperTest.vue");
const ArticleLongContent = () => import(
  /* webpackChunkName: "ArticleLongContent." */
  /* webpackMode: "lazy" */
  "~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue");
const ArticleLongContentRawHTML = () => import(
  /* webpackChunkName: "ArticleLongContentRawHTML." */
  /* webpackMode: "lazy" */
  "~/components/DocumentPage/ArticleLongContentRawHTML/ArticleLongContentRawHTML.vue");

// const ArticlePreview = () => import(
//   /* webpackChunkName: "ArticlePreview." */
//   /* webpackMode: "lazy" */
//   '~/components/DocumentPage/ArticlePreview/ArticlePreview.vue');



@Component({
  components: {
    Promo,
    // ArticlePreview,
    Multimedia,
    ArticleLongContent,
    ArticleLongContentRawHTML,
  },
  fetchOnServer:false,
})
export default class JustAgo extends Vue {
  @Prop({
    type: Number,
    required: true,
    default: 77,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) regionId!: number;

  docPageData: DocPageAPI.Endpoint_4 | null = null;
  multimediaData: IMultimedia.IMultimedia | null = null;

  async fetch(){

    let rightNowIds: number[] = [];
    await fetcher('rightNow', {
      query: {
        regionid: this.regionId,
      }
    })
      .then((res:Response) => {
        if (res.ok) {
          return res.json()
        } else {
          console.error('Error fetching rightNowIds data', res.status);
          setTimeout(() => this.fetch(), 3000);
        }
      }).then((data:number[])=>{
        rightNowIds = data;
      })
      .catch((err:Error)=>{
        console.error(err);
        setTimeout(() => this.fetch(), 3000)
      });


    rightNowIds = rightNowIds.filter((el:number)=>{
      return el !== Number(this.$route.params.id)
    })

    // alert(rightNowIds);

    if(rightNowIds && rightNowIds.length){
      const docId = rightNowIds[0]
      this.docPageData = await fetcher('docPageData', {
        query: {
          docId,
        }
      })
        .then((res:Response) => {
          if (res.ok) {
            return res.json()
          } else {
            console.error('Error fetching docPageData for JustNow data', res.status);
            setTimeout(() => this.fetch(), 3000);
          }
        })
        .catch((err:Error)=>{
          console.error(err);
          setTimeout(() => this.fetch(), 3000)
        })
    }


    // alert(this.$route.params.id)
  }

  async fetchMultimedia(){
    // TagType тип тега.
    // 3 - регион
    // 4 - паблишинг
    const tagType = 3


    await fetcher('docMultimedia', {
      query: {
        id: this.regionId,
        type: tagType
      }
    })
      .then((res:Response) => {
        if (res.ok) {
          return res.json()
        } else {
          console.error('Error fetching multimediaData data', res.status);
          setTimeout(() => this.fetchMultimedia(), 3000)
        }
      }).then((data:IMultimedia.IMultimedia)=>{
        this.multimediaData = data;
        // console.log('pictureOfTheDay',data)
      })
      .catch((err:Error)=>{
        console.error(err);
        setTimeout(() => this.fetchMultimedia(), 3000)
      })
  }

  get getIsRawHtml(){
    return this.docPageData?.data?.content
      && this.docPageData.data.content.isHtml
  }

  //TODO TEST LAZY LENTA
  observer!: IntersectionObserver;


  mounted() {
    // console.log('this.multimediaData',this.multimediaData)

    let options = {
      rootMargin: '400px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,observer)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){
          if (!this.multimediaData) {
            this.fetchMultimedia();
          }
          observer.unobserve(<Element>this.$refs.visibilityTarget)
        }
      })
    }, options);

    this.observer.observe(<Element>this.$refs.visibilityTarget);
  }

  beforeUnmount(){
    this.observer.disconnect();
  }

}
