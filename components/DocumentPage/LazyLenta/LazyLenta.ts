import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {
  DocPageAPI,
  Multimedia as IMultimedia
} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";


// import MostReadableAside from '~/components/MainPage/MostReadableAside/MostReadableAside.vue'
const MostReadableAside = () => import(
  /* webpackChunkName: "MostReadableAside" */
  /* webpackMode: "lazy" */
  "~/components/MainPage/MostReadableAside/MostReadableAside.vue");

const Promo = () => import(
  /* webpackChunkName: "Promo." */
  /* webpackMode: "lazy" */
  "~/components/general/Promo/Promo.vue");
const Multimedia = () => import(
  /* webpackChunkName: "Multimedia." */
  /* webpackMode: "lazy" */
  "~/components/MainPage/Multimedia/MultimediaSwiperTest/MultimediaSwiperTest.vue");

const ArticlePreview = () => import(
  /* webpackChunkName: "ArticlePreview." */
  /* webpackMode: "lazy" */
  '~/components/DocumentPage/ArticlePreview/ArticlePreview.vue');


@Component({
  components: {
    Promo,
    ArticlePreview,
    Multimedia,
    MostReadableAside
  },
})
export default class LazyLenta extends Vue {
  @Prop({
    type: Number,
    required: true,
    default: 77,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) regionId!: number;
  @Prop({
    type: Array,
    required: true,
    default: [],
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) lazyDocsIds!: DocPageAPI.LazyLoadIds;

  multimediaData: IMultimedia.IMultimedia | null = null;


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

  //TODO TEST LAZY LENTA
  observer!: IntersectionObserver;

  // visible: boolean = false;

  lazyDocs: DocPageAPI.Endpoint_4[]=[]


  async fetchLazyDoc(docId: number | undefined) {
    if(!docId) return
    const docPageData: DocPageAPI.Endpoint_4
      = await fetcher('docPageData', {
      query: {
        docId,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.error(`Fetch lazy doc fail, response status ${res.status}`)
        }
      })
      .catch(err => {
       console.error('Fetch lazy doc fail',err)
      })

    if(docPageData){
      this.lazyDocs.push(docPageData)
    } else {
      this.lazyDocsIds.unshift(docId)
    }
    this.observer.observe(<Element>this.$refs.visibilityTarget);
  }

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
          if (this.lazyDocs.length < 4 && this.lazyDocsIds.length){
            const nextDoc = this.lazyDocsIds.shift()
            if (nextDoc && nextDoc.toString() != this.$route.params.id){
              this.fetchLazyDoc(nextDoc)
            } else if (this.lazyDocsIds.length){
              this.fetchLazyDoc(this.lazyDocsIds.shift())
            }
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

  //TODO TEST LAZY LENTA END

}
