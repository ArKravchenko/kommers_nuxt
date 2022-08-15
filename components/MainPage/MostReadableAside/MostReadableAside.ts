import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {MostReadable as IMostReadable} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";

@Component({
  // // @ts-ignore
  // serverCacheKey(a: any) {
  //   // console.log(a)
  //   // return false
  //   return a.regionId
  // },
  components: {},
  fetchOnServer: false,
})
export default class MostReadableAside extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) wide!: boolean;

  mostReadableAsideData: IMostReadable.IMostReadable | null = null;

  fetchData() {
    return fetcher('mostReadableAside',).then((res: Response) => {
      if (res.ok) {
        return res.json()
      } else {
        console.error('Error fetching pictureOfTheDay data', res.status)
        setTimeout(() => this.fetchData(), 3000)
      }
    }).then((data: IMostReadable.IMostReadable) => {
      this.mostReadableAsideData = data;
      // this.visible = true;
      console.log('this.mostReadableAsideData', this.mostReadableAsideData)

    })
      .catch((err: Error) => {
        console.error(err);
        setTimeout(() => this.fetchData(), 3000)
      })
  }

  get getDocs() {
    return this.mostReadableAsideData?.data?.items?.length
      && this.mostReadableAsideData.data.items
  }

  getDocViews(doc: IMostReadable.Doc) {
    return doc.views
      && doc.views
  }

  getDocTitle(doc: IMostReadable.Doc) {
    return doc.title
      && doc.title
  }

  getDocHref(doc: IMostReadable.Doc) {
    return doc.href
      && doc.href
  }

  getDocImg(doc: IMostReadable.Doc) {
    return doc.img
      && doc.img
  }

  getNoscriptString(doc: IMostReadable.Doc) {

    return `<noscript>
            <img class="most_readable__img fallback_image"
            src="${this.getDocImg(doc).src || ''}"
            alt="${this.getDocImg(doc).alt || ''}">
        </noscript>`

  }

  observer!: IntersectionObserver;

  // visible: boolean = false;

  mounted() {
    // this.$fetch()
    // console.log('this.mostReadableAsideData', this.mostReadableAsideData)

    let options = {
      rootMargin: '200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry, observer) => {
      entry.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.fetchData()
          observer.disconnect()
        }
      })
    }, options);

    this.observer.observe(<Element>this.$refs.observer);
  }

  beforeUnmount() {
    this.observer.disconnect();
  }

}
