import {Component ,mixins, Action} from 'nuxt-property-decorator'
// import type {AsyncComponent} from 'vue'
import LogTimings from "~/mixins/logTimings.mixin";

import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header/Header.vue'
// import Lenta from '~/components/general/Lenta/Lenta.vue'
import Vicons from '~/components/general/Vicons/Vicons.vue'
// import Lenta from '~/components/Lenta/components/Lenta/Lenta.vue'

import LentaVerticalPlaceholder from "@/components/Lenta/components/Lenta/LentaVertical/LentaVerticalPlaceholder.vue"
import LentaHorizontalPlaceholder from "@/components/Lenta/components/Lenta/LentaHorizontal/LentaHorizontalPlaceholder.vue"
const Lenta = () => import(
  /* webpackChunkName: "Lenta." */
  /* webpackMode: "lazy" */
  "@/components/Lenta/components/Lenta/Lenta.vue");
// import Banner from '~/components/general/Banner/Banner.vue'

// const Vicons:AsyncComponent = () => import('~/components/general/Vicons/Vicons.vue')
// const Lenta:AsyncComponent = () => import('~/components/general/Lenta/Lenta.vue')
// const Footer:AsyncComponent = () => import('~/components/general/Footer/Footer.vue')
// const Banner = () => import(
//   /* webpackChunkName: "Banner." */
//   /* webpackMode: "eager" */
//   "@/components/general/Banner/Banner.vue");

@Component({
  components: {
    Vicons,
    Footer,
    Lenta,
    LentaHorizontalPlaceholder,
    LentaVerticalPlaceholder,
    Header,
    // Banner,
  },
})
export default class Default extends mixins<LogTimings>(LogTimings) {
  @Action('Lenta/fetchArticlesData') fetchArticlesData!: () => any;

  mountLenta: boolean = false;

  mounted() {
    if (window.innerWidth >= 1198) {
      this.fetchArticlesData().then(() => {
        this.mountLenta = true;
      })
        .catch((err: any) => {
          console.error(err)
        })
    }
    // console.log('this.$style',JSON.stringify(this.$style))
  }
}
