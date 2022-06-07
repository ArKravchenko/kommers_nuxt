import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";

import ArticleLongContent from '~/components/DocumentPage/ArticleLongContent/ArticleLongContent.vue'


@Component({
  components: {
    ArticleLongContent
  }
})
export default class ArticlePreview extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) articleLongContent!: ArticleLong.IArticleLong | null;

  preview: boolean = true

  showFullClickHandler() {
    this.preview = false
  }

}
