import { Component, Vue } from 'nuxt-property-decorator'
import SuperAnnounce from '~/components/SuperAnnounce/SuperAnnounce.vue'
import TopNews from '~/components/TopNews/TopNews.vue'
import LightSpot from '~/components/LightSpot/LightSpot.vue'

@Component({
  components: {
    SuperAnnounce,
    TopNews,
    LightSpot,
  },
})
export default class PictureOfTheDay extends Vue {}
