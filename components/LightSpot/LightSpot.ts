import { Component, Vue } from 'nuxt-property-decorator'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import BlockquoteOfTheDay from '~/components/BlockquoteOfTheDay/BlockquoteOfTheDay.vue'
import PhotoOfTheDay from '~/components/PhotoOfTheDay/PhotoOfTheDay.vue'
import VideoOfTheDay from '~/components/VideoOfTheDay/VideoOfTheDay.vue'
import GraphOfTheDay from '~/components/GraphOfTheDay/GraphOfTheDay.vue'
import DigitOfTheDay from '~/components/DigitOfTheDay/DigitOfTheDay.vue'

@Component({
  components: {
    Swiper,
    SwiperSlide,
    BlockquoteOfTheDay,
    PhotoOfTheDay,
    VideoOfTheDay,
    GraphOfTheDay,
    DigitOfTheDay,
  },
  data() {
    return {
      slideList: [
        'BlockquoteOfTheDay',
        'PhotoOfTheDay',
        'VideoOfTheDay',
        'GraphOfTheDay',
        'DigitOfTheDay',
      ],
    }
  },
})
export default class LightSpot extends Vue {
  protected activeSlideIndex: number = 0
  protected swiperTop: null | SwiperClass = null

  protected swiperOption = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: '.light_spot_slider__nav--next',
      prevEl: '.light_spot_slider__nav--prev',
    },
  }

  protected swiperReady(swiper: SwiperClass) {
    this.swiperTop = swiper
    swiper.on('transitionEnd', () => {
      this.activeSlideIndex = swiper.activeIndex
    })
  }
}
