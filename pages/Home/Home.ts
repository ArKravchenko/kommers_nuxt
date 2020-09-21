import { Component, Vue } from 'nuxt-property-decorator'
import Cols from '~/components/general/Cols/Cols.vue'

@Component({
  components: {
    Cols,
  },
})
export default class Home extends Vue {}
