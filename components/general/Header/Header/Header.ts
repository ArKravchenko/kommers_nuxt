import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Header extends Vue {
  isSearchActive: boolean = false;
  isRegionsMenuActive: boolean = false;

  searchClickHandler(e: Event){
    e.stopPropagation();
    this.isSearchActive = !this.isSearchActive;
  }

  regionsToggleHandler(val:boolean){
    this.isRegionsMenuActive = val;
  }
}
