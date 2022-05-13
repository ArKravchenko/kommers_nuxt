import {Component, Prop, Vue} from 'nuxt-property-decorator'
// import type {ArticleLong} from "~/interfaces/API/MainPageApi";


@Component({})
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

  isSharingOpen: boolean = false;

  isSharingOpenToggle() {
    this.isSharingOpen = !this.isSharingOpen
  }

  isFavAdded: boolean = false;

  isFavAddedToggle() {
    this.isFavAdded = !this.isFavAdded
  }

}
