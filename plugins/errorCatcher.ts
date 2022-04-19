import Vue from 'vue'
import Component from "vue-class-component";


@Component({
  errorCaptured(err: Error, vm: Vue, info: string) {
    if (process.client){
      console.group('Caught error')

      console.group('err')
      console.error('err', err);
      console.groupEnd()

      console.group('vm')
      console.log( vm);
      console.groupEnd()

      console.group('info')
      console.log('info:', info);
      console.groupEnd()

      console.groupEnd()
    }

    return true;
  }
})
export class ErrorCatcher extends Vue {

}

Vue.mixin(ErrorCatcher)
