import {Component, Prop, Vue} from 'nuxt-property-decorator'
// import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import {fetcher} from "~/helpers/fetcher";
import {DocPageAPI} from "~/interfaces/API/MainPageApi";


@Component({
  fetchOnServer: false,
})
export default class ArticleSharing extends Vue {
  @Prop({
    type: String,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) readingTime!: string | null;
  @Prop({
    type: String,
    required: false,
    default: null,
  }) sharingHref!: string | null;
  @Prop({
    type: String,
    required: false,
    default: null,
  }) docId!: string | null;

  views?: number | null = null;
  comments?: number | null = null;

  async fetch(){
    await fetcher('docViewsComments', { query: this.docId ? { docid: this.docId } : {} })
      .then((res:Response) => {
        if (res.ok) {
          return res.json()
        } else {
          console.error('Error fetching views and comments counts', res.status);
          setTimeout(() => this.fetch(), 3000)
        }
      }).then(({ views, comments } :DocPageAPI.Counters)=>{
        this.views = views;
        this.comments = comments;
      })
      .catch((err:Error)=>{
        console.error(err);
        setTimeout(() => this.fetch(), 3000)
      })
  }

  get getViews(){
    if (this.views && Math.abs(this.views) >= 1000000) {
      return `${Math.floor(this.views / 100000) / 10}M`.replace('.', ',');
    } else if (this.views && Math.abs(this.views) >= 1000) {
      return `${Math.floor(this.views / 1000)}K`;
    }
    return this.views
  }

  openComments(){
    alert()
  }

  get getComments(){
    if (this.comments && this.comments > 99) {
      return `${this.comments}+`;
    }
      return this.comments

  }

  isSharingOpen: boolean = false;

  isSharingOpenToggle() {
    this.isSharingOpen = !this.isSharingOpen
  }

  isFavAdded: boolean = false;

  isFavAddedToggle() {
    this.isFavAdded = !this.isFavAdded
  }

}
