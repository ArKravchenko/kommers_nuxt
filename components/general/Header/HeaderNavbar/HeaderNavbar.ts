import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class HeaderNavbar extends Vue {
  @Prop({ type: Boolean, default: true }) hasFocus!: boolean

  @Emit()
  burgerClick() {}

  @Emit()
  regionsShow() {}

  @Emit()
  regionsHide() {}
}
