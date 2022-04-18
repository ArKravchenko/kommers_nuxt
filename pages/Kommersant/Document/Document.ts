import { Component, Vue } from 'nuxt-property-decorator'
// import Cols from '~/components/general/Cols/Cols.vue'
// import Logo from '~/components/Logo.vue'

@Component({
  components: {
    // Cols,
    // Logo,
  },
})
export default class Document extends Vue {

  mounted(){
    console.log('this.$route',this.$route)
    console.log('this.$router',this.$router)
    console.log('this',this)
    console.log('props',this.$props)
  }
}
