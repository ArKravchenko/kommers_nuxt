import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class BigAnnounce extends Vue {
  @Prop({ type: Boolean, default: false }) isCompanyNews!: boolean
  @Prop({ type: Boolean, default: false }) isProject!: boolean
}
