import {
  Component,
  Mutation,
  Vue,
  Action,
  Getter,
  mixins,
} from 'nuxt-property-decorator'
import { Alert, ConsoleLog } from '~/mixins/alert.mixin';

@Component
export default class Cols extends mixins<Alert, ConsoleLog>(Alert, ConsoleLog) {
  @Action('testModule/testAction') private testAction!: () => void
  @Mutation('testModule/testMutation') private testMutation!: () => void
  @Getter('testModule/testGetter') private count!: () => number

  mounted() {
    // this.testAction()
    // this.testMutation()
    console.log(this.$style)
    // this.alert();
    this.logthis()
  }
}
