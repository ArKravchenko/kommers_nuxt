import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'

@Component({})
export default class HeaderRegion extends Vue {
  @Prop({ type: Boolean, default: true }) isActive!: boolean

  @Emit()
  regionsActive() {}

  @Emit()
  regionsInactive() {}

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
