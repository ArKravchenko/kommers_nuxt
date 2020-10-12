import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class HeaderMenu extends Vue {
  @Prop({ type: Boolean, default: true }) isHidden!: boolean
}
