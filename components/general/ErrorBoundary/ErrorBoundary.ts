import {Component, Vue} from 'nuxt-property-decorator'
// import HtmlTagElement from "~/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement";



// @ts-ignore
@Component({
  name: 'ErrorBoundary',
  // data: () => ({
  //   error: false
  // }),
  // errorCaptured (this: ErrorBoundary,err, vm, info) {
  //   this.error = true
  // },
  // errorCaptured(this: ErrorBoundary, err, vm, info) {
  //   this.error = err;
  //   console.log('this',this)
  //   console.log('error',err)
  //   console.log('vm',vm)
  //   console.log('info',info)
  //   return false
  // },

  // functional: true,
  // render (h) {
  //   //@ts-ignore
  //   return this.error ? h('p', 'Something went wrong') : this.$slots.default[0]
  // }
})
export default class ErrorBoundary extends Vue {

  error: Error | null = null;

  errorCaptured(err: Error, vm: Vue, info: string) {
    this.error = err;
    console.log('this',this)
    console.log('error',err)
    console.log('vm',vm)
    console.log('info',info)
    return true
  }
}


