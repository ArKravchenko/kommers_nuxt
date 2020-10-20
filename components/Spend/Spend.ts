import { Component, Vue } from 'nuxt-property-decorator'
import SectionHeader from '~/components/SectionHeader/SectionHeader.vue'

@Component({
  components: {
    SectionHeader,
  },
})
export default class Spend extends Vue {
  private articleList: {
    src?: string
    tag: string
    title: string
    subtitle: string
    isWide?: boolean
  }[] = [
    {
      src:
        'https://im.kommersant.ru/Issues.photo/OGONIOK/2020/031/KMO_157030_02820_1_t239_232323.jpg',
      tag: 'Фото недели',
      title: 'Здесь был Бейрут',
      subtitle:
        'Взрыв, который снес половину столицы, убил 130, ранил свыше 5 тысяч и лишил крова сотни тысяч людей,— это слишком',
    },
    {
      src:
        'https://im.kommersant.ru/Issues.photo/OGONIOK/2020/031/KMO_157030_02815_1_t239_231658.jpg',
      tag: 'Наука',
      title: '«Это неисчерпаемый источник чистой энергии»',
      subtitle:
        'Российские океанологи заглянули в будущее возобновляемой энергетики',
    },
    {
      src:
        'https://im.kommersant.ru/Issues.photo/OGONIOK/2020/031/KOG_004868_00017_2_t239_223803.jpg',
      tag: 'Фотофиниш',
      title: 'Рабочий день Гриши Пронина',
      subtitle: 'Альбом 1955 года',
    },
    {
      src:
        'https://im.kommersant.ru/Issues.photo/OGONIOK/2020/031/KMO_152927_01101_1_t239_224358.jpg',
      tag: 'Книги',
      title: 'Крем и пламя',
      subtitle: 'Как подружить сливки со сливами',
    },
    {
      src:
        'https://im.kommersant.ru/Issues.photo/WEEKEND/2020/025/KMO_153275_10200_1_t233_122344.jpg',
      tag: 'Стиль',
      title: 'Смерть в Неаполе',
      subtitle: 'Василий Степанов о новом — и очень хорошем — «Мартине Идене»',
    },
    {
      tag: 'Музыка',
      title: 'Ушли за цветами',
      subtitle:
        'Самые популярные туристические направления по версии русских классиков',
    },
    {
      src:
        'https://im.kommersant.ru/Issues.photo/WEEKEND/2020/025/KMO_153275_10198_1_t239_122605.jpg',
      tag: 'Авто',
      title: 'Южная готика и новая этика',
      subtitle:
        'Татьяна Алешичева о «Долине соблазна» как производственной драме из жизни стриптизерш',
      isWide: true,
    },
  ]
}
