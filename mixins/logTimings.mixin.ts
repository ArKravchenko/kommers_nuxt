import Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class LogTimings extends Vue {
  mounted() {
    this.$store.getters.getTimings
    const getTimings = this.$store.getters.getTimings;
    const perfData = window.performance.timing;

    console.group('timings')
    console.log('this.getTimings', getTimings)
    console.log('perfData', perfData)
    //
    //
    // console.log('requestStart', perfData.requestStart)
    //
    // console.log('browserToSsrReceived',
    //   getTimings.browserToSsrReceived,
    //   `+${getTimings.browserToSsrReceived - perfData.requestStart}ms`
    // )
    //
    // console.log('ssrToApiSent',
    //   getTimings.ssrToApiSent,
    //   `+${getTimings.ssrToApiSent - getTimings.browserToSsrReceived}ms`
    // )
    //
    // console.log('apiToSsrReceived',
    //   getTimings.apiToSsrReceived,
    //   `+${getTimings.apiToSsrReceived - getTimings.ssrToApiSent}ms`
    // )
    // console.log('responseStart',
    //   perfData.responseStart,
    //   `+${perfData.responseStart - getTimings.apiToSsrReceived}ms`
    // )
    // console.log('responseEnd',
    //   perfData.responseEnd,
    //   `+${perfData.responseEnd - perfData.responseStart}ms`
    // )
    // console.groupEnd()


    // console.group('timings')

    console.log('Between requestStart and connectStart ',
      `${perfData.requestStart - perfData.connectStart}ms`
    )

    console.log('Between connectStart and fetchStart',
      `${perfData.connectStart - perfData.fetchStart}ms`
    )


    // We can't compare this time with
    // perfData.connectStart and perfData.fetchStart because
    // browser  and server has different system time
    console.log('browserToSsrReceived',
      getTimings.browserToSsrReceived,
    )
    console.log('ssrToApiSent',
      getTimings.ssrToApiSent,
      `+${getTimings.ssrToApiSent - getTimings.browserToSsrReceived}ms`
    )

    console.log('apiToSsrReceived',
      getTimings.apiToSsrReceived,
      `+${getTimings.apiToSsrReceived - getTimings.ssrToApiSent}ms`
    )
    console.log('responseStart',
      getTimings.ssrToClientSent,
      `+${getTimings.ssrToClientSent - getTimings.apiToSsrReceived}ms`
    )
    console.groupEnd()

  }
}
