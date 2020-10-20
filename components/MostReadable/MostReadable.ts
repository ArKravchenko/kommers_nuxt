import { Component, Vue, Prop } from 'nuxt-property-decorator'
import SectionHeader from '~/components/SectionHeader/SectionHeader.vue'

@Component({
  components: {
    SectionHeader,
  },
})
export default class MostReadable extends Vue {
  @Prop({ type: Boolean, default: false }) hasPhoto!: boolean

  private mostReadableNews: {
    hasPhoto?: boolean
    photoSrc?: string
    counter: number
    title: string
  }[] = [
    {
      hasPhoto: true,
      photoSrc:
        'https://im.kommersant.ru/Issues.photo/CORP/2020/08/09/KMO_177361_00007_1_t218_161801.jpg',
      counter: 227946,
      title: '«Был бы говенный губернатор, за него бы не вышли»',
    },
    {
      counter: 112309,
      title: 'Оппозиционерам тут не место',
    },
    {
      counter: 84568,
      title: 'Посадка в неадеквате',
    },
    {
      counter: 77303,
      title: 'В Думе давали премьера',
    },
    {
      counter: 62047,
      title: 'Заемщики повышенного спроса',
    },
  ]
}
