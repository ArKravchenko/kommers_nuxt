import { Component, Vue } from 'nuxt-property-decorator'
import PictureOfTheDay from '~/components/PictureOfTheDay/PictureOfTheDay.vue'
import LightSpot from '~/components/LightSpot/LightSpot.vue'
import PrimeTime from '~/components/PrimeTime/PrimeTime.vue'
import Promo from '~/components/Promo/Promo.vue'
import MostReadable from '~/components/MostReadable/MostReadable.vue'
import Rubric from '~/components/Rubric/Rubric.vue'
import Spend from '~/components/Spend/Spend.vue'
import Vote from '~/components/Vote/Vote.vue'
import BigAnnounce from '~/components/BigAnnounce/BigAnnounce.vue'

@Component({
  components: {
    PictureOfTheDay,
    LightSpot,
    PrimeTime,
    Promo,
    MostReadable,
    Rubric,
    Spend,
    Vote,
    BigAnnounce,
  },
})
export default class Main extends Vue {}
