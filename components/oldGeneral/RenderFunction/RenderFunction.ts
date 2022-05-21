import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

@Component
export default class RenderFunction extends Vue {

  private render(h: typeof Vue.prototype.$createElement) {

    return h('noscript',this.$scopedSlots!.default!({}))  //h(ReactFunctionalComponent);
  }

  created(){
    process.client  &&  alert('created')
  }

  mounted(){
    alert(JSON.stringify(this.$scopedSlots!.default!({})))
  }
}
