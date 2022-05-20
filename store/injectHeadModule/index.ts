import {MutationTree} from "vuex";

/**
 * IMPORTANT! THIS IS USED TOGETHER WITH
 * vue-renderer:SSR:templateParams NUXT HOOK
 * TO INJECT CUSTOM STYLES AND SCRIPTS STRINGS FROM THE ADMIN PANEL INTO A DOCUMENT
 */

type InjectHeadState = {
  scripts: string,
  styles: string
}

export const state = (): InjectHeadState => ({
  scripts: '',
  styles: ''
})

// const actions = {
//   // addScripts(scripts:string) {
//   //   // alert('testAction invoked from testModule')
//   // },
//   // addStyles(styles:string) {
//   //   // alert('testAction invoked from testModule')
//   // },
//
// }

export const mutations: MutationTree<InjectHeadState> = {
  injectScriptsString(state, scripts: string) {
    state.scripts += scripts;
  },
  injectStylesString(state, styles: string) {
    state.styles += styles;
  },
}

// const getters = {
//   testGetter(state: { counter: number }): number {
//     return state.counter
//   },
// }

// export default { state, actions, mutations, getters }
