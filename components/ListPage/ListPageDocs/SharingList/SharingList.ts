import {Component, Prop, Vue} from 'nuxt-property-decorator'


// TODO doc views is absent in data
@Component({})
export default class SharingList extends Vue {
  @Prop({
    type: Number,
    required: false,
    default: null,
  }) readTime!: number | null;
  @Prop({
    type: String,
    required: false,
    default: null,
  }) sharingHref!: string | null;

  isSharingOpen: boolean = false;

  isSharingOpenToggle(){
    this.isSharingOpen = !this.isSharingOpen
  }

}
