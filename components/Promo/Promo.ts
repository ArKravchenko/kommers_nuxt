import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  data() {
    return {
      tag: 'Партнерский проект',
      title: 'Разговоры о бизнесе',
      subtitle: 'Михаил Девятов, UFG Wealth Management',
    }
  },
})
export default class Promo extends Vue {}
