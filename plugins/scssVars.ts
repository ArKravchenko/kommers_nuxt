import Vue from "vue"
import scssVars from '@/config/scssConfig';

declare module 'vue/types/vue' {
  interface Vue {
    $scssVars: typeof scssVars
  }
}
Vue.prototype.$scssVars = scssVars

