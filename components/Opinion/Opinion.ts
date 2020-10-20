import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Opinion extends Vue {
  @Prop({ type: Boolean, default: false }) isSmall!: boolean
}
