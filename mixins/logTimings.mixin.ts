// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'
import {Log} from "~/decorators/log.decorator";
import {Getter, Mutation} from "nuxt-property-decorator";
import ITimings from "~/interfaces/ITimings";

// You can declare mixins as the same style as components.
@Component
export default class LogTimings extends Vue {

  created() {
    if (process.server) {
      this.$store.commit('setSsrToClientSent',Date.now())
      // this.setSsrToClientSent(Date.now())
    }
  }

  mounted(){
  // @Mutation('setSsrToClientSent') setSsrToClientSent!: (time: number) => void;
  // @Getter private getTimings!: ITimings['timings'];
    this.$store.getters.getTimings
    const getTimings = this.$store.getters.getTimings
    console.group('timings')
    console.log('this.getTimings', getTimings)
    const perfData = window.performance.timing;
    console.log('perfData', perfData)


    console.log('requestStart', perfData.requestStart)

    console.log('browserToSsrReceived',
      getTimings.browserToSsrReceived,
      getTimings.browserToSsrReceived - perfData.requestStart + 'ms'
    )

    console.log('ssrToApiSent',
      getTimings.ssrToApiSent,
      getTimings.ssrToApiSent - getTimings.browserToSsrReceived + 'ms'
    )

    console.log('apiToSsrReceived',
      getTimings.apiToSsrReceived,
      getTimings.apiToSsrReceived - getTimings.ssrToApiSent + 'ms'
    )
    console.log('responseStart',
      perfData.responseStart,
      perfData.responseStart - getTimings.apiToSsrReceived  + 'ms'
    )
    console.log('responseEnd',
      perfData.responseEnd,
      perfData.responseEnd - perfData.responseStart  + 'ms'
    )
    console.groupEnd()

  }
}
