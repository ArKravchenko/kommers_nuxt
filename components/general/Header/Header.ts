import { Component, Vue } from 'nuxt-property-decorator'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar.vue'
import HeaderMenu from './HeaderMenu/HeaderMenu.vue'
import HeaderRegion from './HeaderRegion/HeaderRegion.vue'

@Component({
  components: {
    HeaderNavbar,
    HeaderMenu,
    HeaderRegion,
  },
})
export default class Header extends Vue {
  private menuIsActive: boolean = false

  private toggleMenuActive() {
    this.menuIsActive = !this.menuIsActive
  }
}
