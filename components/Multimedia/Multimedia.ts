import { Component, Vue } from 'nuxt-property-decorator'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Uho from '~/components/Uho/Uho.vue'
import SectionHeader from '~/components/SectionHeader/SectionHeader.vue'

@Component({
  components: {
    Swiper,
    SwiperSlide,
    Uho,
    SectionHeader,
  },
})
export default class Multimedia extends Vue {
  protected slidesPerWindow: number = 1
  protected spaceBetween: number = 0
  protected activeSlideIndex: number = 0
  protected swiperTop: null | SwiperClass = null

  protected swiperOptionTop = {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: this.slidesPerWindow,
    spaceBetween: this.spaceBetween,
    slidesPerGroup: this.slidesPerWindow,
    navigation: {
      nextEl: '.multimedia__nav--next',
      prevEl: '.multimedia__nav--prev',
    },
  }

  protected swiperTopReady(swiper: SwiperClass) {
    this.swiperTop = swiper
    swiper.on('transitionEnd', () => {
      this.activeSlideIndex = swiper.activeIndex
    })
  }

  protected changeSlides() {
    if (process.client && window.innerWidth > 1198) {
      this.slidesPerWindow = 4
      this.spaceBetween = 40
    }
  }

  protected created() {
    this.$nextTick(() => {
      this.changeSlides()

      if (process.client)
      window.addEventListener('resize', this.changeSlides)
    })
  }

  protected beforeDestroy() {
      if (process.client)
    window.removeEventListener('resize', this.changeSlides)
  }
}
