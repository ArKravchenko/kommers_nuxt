import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  // @ts-ignore
  serverCacheKey(a:any) {
    return 'Promo'
  },
})
export default class Promo extends Vue {}
