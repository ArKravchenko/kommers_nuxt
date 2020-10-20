import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Uho extends Vue {
  @Prop({ type: Boolean, default: false }) isPrimeTime!: boolean
  @Prop({ type: Boolean, default: false }) isRubric!: boolean
  @Prop({ type: Boolean, default: false }) hidePhoto!: boolean
  @Prop({ type: Boolean, default: false }) hasPhoto!: boolean
  @Prop({ type: Boolean, default: false }) hasTag!: boolean
}
