import { Component, Vue } from 'nuxt-property-decorator'
import Cols from '~/components/general/Cols/Cols.vue'
import Gallery from '~/components/Gallery/Gallery.vue'

@Component({
  components: {
    Cols,
    Gallery,
  },
})
export default class Home extends Vue {}
