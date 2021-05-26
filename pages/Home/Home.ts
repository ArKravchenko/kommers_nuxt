import { Component, Vue } from 'nuxt-property-decorator'
import Cols from '~/components/general/Cols/Cols.vue'
import Gallery from '~/components/Gallery/Gallery.vue'
import Main from '~/components/Main/Main.vue'

@Component({
  components: {
    Cols,
    Gallery,
      Main
  },
})
export default class Home extends Vue {}
