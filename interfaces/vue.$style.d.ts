import type Vue from 'vue' // don't delete this import statement, it's needed for Vue type augmenting

declare module 'vue/types/vue' {
  interface Vue {
    $style?: {
      [key: string]: string
    }
  }
}
