import {
  Component,
  Mutation,
  Vue,
  Action,
  Getter,
} from 'nuxt-property-decorator'

@Component
export default class Cols extends Vue {
  @Action('testModule/testAction') private testAction!: () => void
  @Mutation('testModule/testMutation') private testMutation!: () => void
  @Getter('testModule/testGetter') private count!: () => number

  private mounted() {
    this.testAction()
    this.testMutation()
    console.log(this.$style)
  }
}
