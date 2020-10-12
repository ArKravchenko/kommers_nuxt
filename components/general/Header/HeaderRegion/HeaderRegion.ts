import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class HeaderRegion extends Vue {
  private regions: string[] = [
    'Санкт-Петербург',
    'Воронеж',
    'Екатеринбург',
    'Ижевск',
    'Казань',
    'Краснодар',
    'Красноярск',
    'Нижний Новгород',
    'Новосибирск',
    'Пермь',
    'Ростов-на-Дону',
    'Самара',
    'Саратов',
    'Уфа',
    'Челябинск',
    'Ярославль',
  ]
}
