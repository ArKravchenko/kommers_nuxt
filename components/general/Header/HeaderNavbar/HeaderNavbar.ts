import { Component, Vue, Emit } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class HeaderNavbar extends Vue {
  @Emit()
  burgerClick() {}
}
