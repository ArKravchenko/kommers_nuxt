import { Component, Vue } from 'nuxt-property-decorator'
import Vicons from '~/components/general/Vicons/Vicons.vue'
import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header.vue'

@Component({
  components: {
    Vicons,
    Footer,
    Header, // : () => import('~/components/general/Header/Header/Header.vue'),
  },
})
export default class Kommersant extends Vue {}
