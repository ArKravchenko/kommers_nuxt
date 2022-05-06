import {Component ,mixins} from 'nuxt-property-decorator'
// import type {AsyncComponent} from 'vue'
import LogTimings from "~/mixins/logTimings.mixin";

import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header/Header.vue'
import Lenta from '~/components/general/Lenta/Lenta.vue'
import Vicons from '~/components/general/Vicons/Vicons.vue'
// import Banner from '~/components/general/Banner/Banner.vue'

// const Vicons:AsyncComponent = () => import('~/components/general/Vicons/Vicons.vue')
// const Lenta:AsyncComponent = () => import('~/components/general/Lenta/Lenta.vue')
// const Footer:AsyncComponent = () => import('~/components/general/Footer/Footer.vue')
const Banner = () => import(
  /* webpackChunkName: "Banner." */
  /* webpackMode: "eager" */
  "@/components/general/Banner/Banner.vue");

@Component({
  components: {
    Vicons,
    Footer,
    Lenta,
    Header,
    Banner,
  },
})
export default class Default extends mixins<LogTimings>(LogTimings) {

  mounted() {
    // console.log('this.$style',JSON.stringify(this.$style))
  }
}
