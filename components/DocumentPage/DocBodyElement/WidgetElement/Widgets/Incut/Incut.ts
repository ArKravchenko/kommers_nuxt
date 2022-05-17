import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

// todo incut title and incut text has wrong types
// todo incut image is absolute
// todo incut нет href
@Component({
  // name is required for recursive components as Incut uses DocBodyElement and vice versa
  name: 'Incut',
  components: {
    HtmlTagElement,
  }
})
export default class Incut extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) incutWidgetData!: ArticleLong.Incut | null;

  cdnUrl: string = process.env.CDN_URL || '';

  get getNoscriptString() {
    return this.getIncutImg
      && `<img class="incut__img fallback_image"
                     src="${this.getIncutImg.src}"
                     alt="${this.getIncutImg.alt}"
                >`
  }

  get getSizes() {
    if (this.incutWidgetData?.align === 'left'
      || this.incutWidgetData?.align === 'right') {
      return `(min-width: ${this.$scssVars.desktop1}px) 240px,
      (min-width: ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2}px) ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2 - 20}px,
      calc(100vw - ${this.$scssVars.mobile_gap * 2 + 20}px)`
    } else {
      return `(min-width: ${this.$scssVars.desktop1}px) ${this.$scssVars.desktop1 - 300 - this.$scssVars.desktop_gap * 3 - 10}px,
			(min-width: ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2}px) ${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2}${this.$scssVars.mobile_width + this.$scssVars.mobile_gap * 2}px,
			calc(100vw -  ${this.$scssVars.mobile_gap * 2}px)
      `
    }
  }

  get getIncutAlignClassName(){
    return this.incutWidgetData?.align === 'center'
    ? 'incut--center'
      : this.incutWidgetData?.align === 'left'
        ? 'incut--left'
        : false
  }

  get getIncutAlign(){
    return this.incutWidgetData?.align
  }

  get getIncutImg(){
    return this.incutWidgetData?.img
  }

  get getIncutHref(){
    return this.incutWidgetData?.href
  }

  get getIncutTitle(){
    return this.incutWidgetData?.title?.length
    && this.incutWidgetData.title
  }

  get getIncutText(){
    return this.incutWidgetData?.text?.length
      && this.incutWidgetData.text
  }

  mounted(){
    // console.log('this.getIncutAlign',this.getIncutAlign)
    // console.log('this.incutWidgetData',this.incutWidgetData)
  }


}
