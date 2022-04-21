import {Component, Vue} from 'nuxt-property-decorator'
// import type {AsyncComponent} from 'vue'

import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header/Header.vue'
import Lenta from '~/components/general/Lenta/Lenta.vue'
import Vicons from '~/components/general/Vicons/Vicons.vue'

// const Vicons:AsyncComponent = () => import('~/components/general/Vicons/Vicons.vue')
// const Lenta:AsyncComponent = () => import('~/components/general/Lenta/Lenta.vue')
// const Footer:AsyncComponent = () => import('~/components/general/Footer/Footer.vue')

@Component({
  components: {
    Vicons,
    Footer,
    Lenta,
    Header,
  },
})
export default class Default extends Vue {

  mounted() {
    // alert(process.env.NUXT_ENV_TEST)
    // console.log('this.$style',JSON.stringify(this.$style))
  }
}
