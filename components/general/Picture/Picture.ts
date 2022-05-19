import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ImageFull} from "~/interfaces/API/MainPageApi";



@Component({})
export default class Picture extends Vue {
  @Prop({
    type: String,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) src!: ImageFull['src'] | null;

  @Prop({
    type: String,
    required: false,
    default: '',
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) alt!: ImageFull['alt'] | '';

  @Prop({
    type: String,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) jpegSrcSet!: ImageFull['jpegSrcSet'] | null;

  @Prop({
    type: String,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) webpSrcSet!: ImageFull['webpSrcSet'] | null;

  @Prop({
    type: String,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) noscriptString!: string | null;

  @Prop({
    type: String,
    required: false,
    default: '',
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) imgClass!: string | '';

  @Prop({
    type: String,
    required: false,
    default: '',
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) sourceClass!: string | '';

  @Prop({
    type: String,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) sizes!: string | null;

  alert(){
    alert()
  }


  mounted() {
    // console.log('this.src',this.src)
    // console.log('this.alt',this.alt)
    // console.log('this.jpegSrcSet',this.jpegSrcSet)
    // console.log('this.webpSrcSet',this.webpSrcSet)
    // console.log('this.imgClass',this.imgClass)
    // console.log('this.sizes',this.sizes)
  }
}
