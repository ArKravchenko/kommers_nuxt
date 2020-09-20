const state = () => ({
  counter: 0,
})

const actions = {
  testAction() {
    alert('testAction invoked from testModule')
  },
}

const mutations = {
  testMutation(state: any) {
    state.counter += 1
  },
}

const getters = {
  testGetter(state: { counter: number }) {
    return state.counter
  },
}

export default { state, actions, mutations, getters }
