import { Component, Vue } from 'nuxt-property-decorator'
import Vicons from '~/components/general/Vicons/Vicons.vue'
import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header.vue'
import Actual from '~/components/general/Actual/Actual.vue'
import AsideNews from '~/components/general/AsideNews/AsideNews.vue'
import BasementNews from '~/components/general/BasementNews/BasementNews.vue'
import Main from '~/components/Main/Main.vue'

@Component({
  components: {
    Vicons,
    Footer,
    Header, // : () => import('~/components/general/Header/Header/Header.vue'),
    Actual,
    AsideNews,
    BasementNews,
    Main,
  },
})
export default class Kommersant extends Vue {}
