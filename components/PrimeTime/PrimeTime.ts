import { Component, Vue } from 'nuxt-property-decorator'
import SectionHeader from '~/components/SectionHeader/SectionHeader.vue'
import Uho from '~/components/Uho/Uho.vue'
import Opinion from '~/components/Opinion/Opinion.vue'

@Component({
  components: {
    SectionHeader,
    Uho,
    Opinion,
  },
})
export default class PrimeTime extends Vue {
  private uhoIsSmall: boolean = true
}
