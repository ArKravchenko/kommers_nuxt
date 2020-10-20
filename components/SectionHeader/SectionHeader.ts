import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SectionHeader extends Vue {
  @Prop({ type: String, default: '' }) sectionName!: string
  @Prop({ type: Boolean, default: false }) isMain!: boolean
  @Prop({ type: Boolean, default: false }) isAside!: boolean
  @Prop({ type: Boolean, default: false }) isSpend!: boolean

  private spendList: string[] = [
    'Стиль',
    'Истории',
    'Авто',
    'Искусство',
    'Кино',
    'Театр',
    'Музыка',
    'Наука',
    'Гаджеты',
    'Книги',
  ]
}
