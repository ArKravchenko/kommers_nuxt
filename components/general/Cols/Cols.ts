import { Component, Mutation, Vue, Action } from 'nuxt-property-decorator'

@Component
export default class Cols extends Vue {
  @Action('testModule/testAction') private testAction!: () => void
  @Mutation('testModule/testMutation') private testMutation!: () => void

  private mounted() {
    this.testAction()
    this.testMutation()
  }
}
