import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'

@Component({})
export default class HeaderMenu extends Vue {
  @Prop({ type: Boolean, default: true }) isActive!: boolean

  @Emit()
  burgerClick() {}
}
