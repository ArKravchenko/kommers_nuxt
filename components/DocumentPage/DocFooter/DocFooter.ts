import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import DocBodyElement from "@/components/DocumentPage/DocBodyElement/DocBodyElement.vue";




@Component({
  components:{
    DocBodyElement,
  }
})
export default class DocFooter extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
  }) footerData!: ArticleLong.IArticleLong['data']['footer'] | null;


  get getFooterIssue(){
    return this.footerData?.issue
    && this.footerData.issue
  }

  get getFooterAuthors(){
    return this.footerData?.authors?.length
      && this.footerData.authors
  }

  get getFooterThemes(){
    return this.footerData?.themes?.length
      && this.footerData.themes
  }


  formatDate(date: Date | false){
    return date && new Date(date).toLocaleDateString('ru-ru',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute:'numeric'
      })
  }


  mounted() {
    // console.log('this.footerData',this.footerData)
  }
}
