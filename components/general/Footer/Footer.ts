import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  //@ts-ignore
  serverCacheKey(a:any) {
    return 'Footer'
  },
})
export default class Footer extends Vue {}
