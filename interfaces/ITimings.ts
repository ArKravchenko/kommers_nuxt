export default interface ITimings {
  timings:{
    browserToSsrSent: number;
    browserToSsrReceived: number;
    ssrToApiSent: number;
    apiToSsrReceived: number;
    ssrToClientSent: number;
    clientReceived: number
  }
}
