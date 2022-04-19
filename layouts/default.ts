import {Component, Vue} from 'nuxt-property-decorator'

const Vicons = () => import(/* webpackChunkName: "Vicons" */'~/components/general/Vicons/Vicons.vue')
// import Footer from '~/components/general/Footer/Footer.vue'
import Header from '~/components/general/Header/Header/Header.vue'
const Lenta = () => import(/* webpackChunkName: "Lenta" */'~/components/general/Lenta/Lenta.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */'~/components/general/Footer/Footer.vue')

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
