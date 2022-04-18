import { Component, Vue } from 'nuxt-property-decorator'
import Vicons from '~/components/general/Vicons/Vicons.vue'
import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header/Header.vue'
import Lenta from '~/components/general/Lenta/Lenta.vue'

@Component({
  components: {
    Vicons,
    Footer,
    Lenta,
    Header, // : () => import('~/components/general/Header/Header/Header.vue'),
  },
})
export default class Default extends Vue {

  mounted(){
    // alert(process.env.NUXT_ENV_TEST)
    // console.log('this.$style',JSON.stringify(this.$style))
  }
}
