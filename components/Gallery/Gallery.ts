import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

type ImageInstance = string

@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class Gallery extends Vue {
  @Prop({ type: Boolean, default: true }) private preview!: boolean
  // @Prop(Array) private images!: imageInstance[];

  private imagesList: ImageInstance[] = [
    'https://im.kommersant.ru/Issues.photo/CORP/2020/10/18/KMO_178270_00032_1_t218_181220.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/10/19/KMO_162543_21861_1_t218_182151.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2015/10/18/KMO_085514_02321_1_t218_103652.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/10/16/KMO_178300_00026_1_t218_184926.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/10/15/KMO_162543_21802_1_t218_192719.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/10/15/KMO_141501_05851_1_t218_202052.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/10/14/KMO_111307_32788_1_t218_115537.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/09/28/KMO_178314_00007_1_t218_200910.webp',
    'https://im.kommersant.ru/Issues.photo/CORP/2020/03/20/KMO_162543_21760_1_t218_172127.webp',
  ]

  protected activeSlideIndex: number = 0
  protected swiperTop: null | SwiperClass = null
  protected swiperThumbs: null | SwiperClass = null

  protected swiperOptionTop = {
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      draggable: true,
    },
  }

  protected swiperOptionThumbs = {
    loop: true,
    loopedSlides: 4,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
  }

  protected get countSlides(): number {
    return this.imagesList.length
  }

  protected get activeSlide(): ImageInstance {
    return this.imagesList[this.activeSlideIndex]
  }

  protected swiperTopReady(swiper: SwiperClass) {
    this.swiperTop = swiper
    swiper.on('transitionEnd', () => {
      this.activeSlideIndex = swiper.activeIndex
    })
  }

  private swiperThumbsReady(swiper: SwiperClass) {
    this.swiperThumbs = swiper
  }

  private mounted() {
    this.$nextTick(() => {
      if (this.swiperTop && this.swiperThumbs) {
        if (this.swiperTop.controller) {
          this.swiperTop.controller.control = this.swiperThumbs
        }

        if (this.swiperThumbs.controller) {
          this.swiperThumbs.controller.control = this.swiperTop
        }
      }
    })
  }
}
