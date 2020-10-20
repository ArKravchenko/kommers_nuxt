import { Component, Vue } from 'nuxt-property-decorator'
import SectionHeader from '~/components/SectionHeader/SectionHeader.vue'

@Component({
  components: {
    SectionHeader,
  },
})
export default class Vote extends Vue {
  private answers: {
    index: number
    answer: string
  }[] = [
    {
      index: 8060,
      answer: 'Семейные торжества семейные торжества семейные торжества',
    },
    {
      index: 8061,
      answer: 'Дружеские встречи',
    },
    {
      index: 8062,
      answer: 'Корпоративные праздники',
    },
    {
      index: 8063,
      answer: 'Выяснение отношений',
    },
    {
      index: 8064,
      answer: 'Решение судеб страны',
    },
    {
      index: 8065,
      answer: 'Сейчас всё можно онлайн',
    },
    {
      index: 8066,
      answer: 'Свой вариант — в комментарии',
    },
  ]
}
