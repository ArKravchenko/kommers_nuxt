import Vue from "vue"
import {IMG_PLACEHOLDER} from '@/config/constants';

declare module 'vue/types/vue' {
  interface Vue {
    $imgPlaceholder: string
  }
}
Vue.prototype.$imgPlaceholder = IMG_PLACEHOLDER

