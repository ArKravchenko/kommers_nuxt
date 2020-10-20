import { Component, Vue } from 'nuxt-property-decorator'
import Promo from '~/components/Promo/Promo.vue'

@Component({
  components: {
    Promo,
  },
})
export default class AsideNews extends Vue {
  private newsList: {
    // path: or link: to document
    dateTime: string
    time: string
    tag: string
    title: string
    subtitle?: string
  }[] = [
    {
      dateTime: '2020-05-26T21:50:26+03:00',
      time: '21:50',
      tag: 'Недвижимость',
      title: 'Отельеры прячутся от звезд',
      subtitle: 'Классификацию просят сделать добровольной',
    },
    {
      dateTime: '2020-05-28T22:01:33+03:00',
      time: '22:01',
      tag: 'Происшествия',
      title:
        'Суд оставил в СИЗО обвиняемого в хранении кокаина боксера Кушиташвили',
    },
  ]
}
