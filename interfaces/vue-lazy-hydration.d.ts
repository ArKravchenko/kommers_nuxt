declare module 'vue-lazy-hydration' {
  import {Component, Vue, Prop} from 'nuxt-property-decorator'

  @Component
  export default class LazyHydrate extends Vue {
    @Prop() idleTimeout?: number
    @Prop() never?: boolean
    @Prop() onInteraction?: boolean | string | Array<keyof DocumentEventMap>
    @Prop() triggerHydration?: boolean
    @Prop() whenIdle?: boolean
    @Prop() whenVisible?: boolean | IntersectionObserverInit
  }

  export function hydrateSsrOnly(component: Vue.AsyncComponent | Vue.Component): Vue.AsyncComponent | Vue.Component

  export function hydrateWhenIdle(component: Vue.AsyncComponent | Vue.Component, options: { ignoredProps?: string[] }): Vue.AsyncComponent | Vue.Component
}
