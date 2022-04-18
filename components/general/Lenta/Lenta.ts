import { Component, Vue } from 'nuxt-property-decorator'
import LentaVertical from './LentaVertical/LentaVertical'
import LentaHorizontal from './LentaHorizontal/LentaHorizontal'


@Component({
  components:{
    LentaVertical,
    LentaHorizontal
  }
})
export default class Lenta extends Vue {}
