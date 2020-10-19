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
    'https://bakunin.com/wp-content/uploads/2018/07/city-1024x576.jpg',
    'https://cdn.gobankingrates.com/wp-content/uploads/2018/03/how-long-1-million-in-savings-will-last-in-every-state-1024x576.jpg',
    'https://www.nyhabitat.com/de/blog/wp-content/uploads/2016/01/Top-10-Brunch-Gelegenheiten-New-York-Skyline-1024x682.jpg',
  ]

  protected activeSlideIndex: number = 0
  protected swiperTop: null | SwiperClass = null
  protected swiperThumbs: null | SwiperClass = null

  protected swiperOptionTop = {
    loop: false,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 10,
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
    loop: false,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
