import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SectionHeader from '~/components/SectionHeader/SectionHeader.vue'
import Uho from '~/components/Uho/Uho.vue'

@Component({
  components: {
    SectionHeader,
    Uho,
  },
})
export default class Rubric extends Vue {
  @Prop({ type: String, default: '' }) rubricName!: string

  private uhoIsSmall: boolean = true
}
