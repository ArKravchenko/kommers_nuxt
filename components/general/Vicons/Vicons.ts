import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  //@ts-ignore
  serverCacheKey(a:any) {
    return 'Vicons'
  },
})
export default class Vicons extends Vue {}
