import {Vue, Watch, Component, Action, Getter, Mutation} from 'nuxt-property-decorator'
// @ts-ignore
import {
  // setCookie,
  getCookie
} from '@/components/Lenta/helpers/cookie';
import Timeout = NodeJS.Timeout;
// import Loading from '../Loading/Loading.vue';
// import Error from '../Error/Error.vue';
import {IWindow} from "../../Interfaces/IWindow";
import type {IDoc} from "../../Interfaces/IDoc";
import config from '@/components/Lenta/config/config.json';

// import LentaHorizontal from './LentaHorizontal/LentaHorizontal.vue';
// import LentaVertical from './LentaVertical/LentaVertical.vue';

// import BusinessAnnounce from '~/../lentaVue/components/BusinessAnnounce/BusinessAnnounce.vue'
// const BusinessAnnounce = () => import(/* webpackChunkName: 'lazyChunks/lentaVue_BusinessAnnounce_lazy' */ '~/../lentaVue/components/BusinessAnnounce/BusinessAnnounce.vue')


// const LentaHorizontal = () => import(/* webpackChunkName: "lazyChunks/lentaVue_LentaHorizontal_lazy" */ './LentaHorizontal/LentaHorizontal.vue');

import LentaHorizontalPaceholder from './LentaHorizontal/LentaHorizontalPlaceholder.vue'

const LentaHorizontal = () => ({
  component: import(/* webpackChunkName: "LentaHorizontal." */ './LentaHorizontal/LentaHorizontal.vue'),
  loading: LentaHorizontalPaceholder,
  error: LentaHorizontalPaceholder,
  delay: 0,
  // timeout: 0
})

// const LentaVertical = () => import(/* webpackChunkName: "lazyChunks/lentaVue_LentaVertical_lazy" */ './LentaVertical/LentaVertical.vue');

import LentaVerticalPlaceholder from './LentaVertical/LentaVerticalPlaceholder.vue'

const LentaVertical = () => ({
  component: import(/* webpackChunkName: "LentaVertical." */ './LentaVertical/LentaVertical.vue'),
  loading: LentaVerticalPlaceholder,
  error: LentaVerticalPlaceholder,
  delay: 0,
  // timeout: 0
})


declare let window: IWindow;

const apiUrl = config.apiUrl;
const apiUrlPersonal = config.apiUrlPersonal;
const apiUrlBusiness = config.apiUrlBusiness;
// const longPollingEndpoint = config.longPollingEndpoint;


// TODO add Debouncing for onresize lazy loading lentaHorizontal / lentaVeriacal

@Component({
  components: {
    LentaHorizontal,
    LentaVertical,
  },
})
export default class Lenta extends Vue {
  @Getter('Lenta/getArticlesData') getArticlesData!: { docs: IDoc[]; docsBusiness: IDoc[]; timestamp: number };
  @Mutation('Lenta/setAuthorized') setAuthorized!: (value: boolean) => void;
  @Mutation('Lenta/setIsPersonalOnly') setIsPersonalOnly!: (value: boolean) => void;
  @Getter('Lenta/getIsBusinessOnly') getIsBusinessOnly!: boolean;
  @Getter('Lenta/getIsPersonalOnly') getIsPersonalOnly!: boolean;
  @Mutation('Lenta/setIncreaseNewArticlesCounter') setIncreaseNewArticlesCounter!: (value?: number) => void;
  @Mutation('Lenta/setClearNewArticlesCounter') setClearNewArticlesCounter!: () => void;
  @Action('Lenta/fetchArticlesData') fetchArticlesData!: () => any;
  @Getter('Lenta/getLentaIsVertical') getLentaIsVertical!: boolean;
  @Mutation('Lenta/setLentaIsVertical') setLentaIsVertical!: () => void;
  @Getter('Lenta/getNewArticlesCounter') getNewArticlesCounter!: number;
  @Getter('Lenta/getAuthorized') getAuthorized!: boolean;


  private async wait(time: number = 5000) {
    await new Promise(resolve => setTimeout(resolve, time));
  }


  @Watch('getIsBusinessOnly')
  @Watch('getIsPersonalOnly')
  switchLentaHandler() {
    this.setIncreaseNewArticlesCounter(0);
  }

  // /**
  //  * This function recursively establishes connection to the the longPolling API endpoint
  //  * and increases newArticlesCounter in case of successful response
  //  * Uses simple polling.
  //  * @returns {Promise<void>}
  //  */
  // async subscribeLongPolling() {
  //     try {
  //         const response = await fetch(`${apiUrl}${longPollingEndpoint}`,{
  //             method: 'GET',
  //             credentials: 'include'
  //         });
  //         if (response.status == 502) {
  //             await this.subscribeLongPolling();
  //         } else if (response.status != 200) {
  //             console.error(response.statusText);
  //             await this.wait();
  //             await this.subscribeLongPolling();
  //         } else {
  //             const message = await response.text();
  //             console.log('subscribeLongPolling message from server: ', message);
  //             this.setIncreaseNewArticlesCounter();
  //             await this.subscribeLongPolling();
  //         }
  //     } catch (e) {
  //         console.error(e);
  //         await this.wait();
  //         await this.subscribeLongPolling();
  //     }
  // };


  /**
   * This function recursively fetches the news feed once in the interval milliseconds and increases newArticlesCounter
   * if new articles are presented.
   * Uses simple polling.
   * @param {number} interval
   * @returns {Promise<void>}
   */
  async subscribePolling(interval?: number) {
    // We save isPersonalOnly and isBusinessOnly state params fetch been dispatched with to validate
    // if response staled or not
    const isPersonalOnly = this.getIsPersonalOnly;
    const isBusinessOnly = this.getIsBusinessOnly;
    const url = isPersonalOnly ? apiUrlPersonal : isBusinessOnly ? apiUrlBusiness : apiUrl;

    // if tab is not in focus don't fetch
    if (!this.checkVisibleTab()) {
      // console.log('DEV_WARN: 00LSP:TNW:000')
      await this.wait();
      await this.subscribePolling(interval);
      return
    }

    try {
      const response = await fetch(`${url}`, {
        method: 'GET',
        credentials: 'include'
      });
      if (response.status == 502) {
        await this.wait();
        await this.subscribePolling(interval);
      } else if (response.status != 200) {
        console.error(response.statusText);
        await this.wait();
        await this.subscribePolling(interval);
      } else {

        // TODO make different data storage for personal articles and general articles
        const message = await response.json();

        const oldDocs = this.getArticlesData.docs || [];
        const newDocs = message.docs || [];

        const newArticlesCount = this.checkNew(this.extractIds(newDocs), this.extractIds(oldDocs));

        // Checks if fetch query had been dispatched with the same parameters as has been received
        // Ignores counter increase if parameters changed
        if (newArticlesCount
          && isPersonalOnly === this.getIsPersonalOnly
          && isBusinessOnly === this.getIsBusinessOnly) {
          this.setIncreaseNewArticlesCounter(newArticlesCount);
        }
        await this.wait(interval);
        await this.subscribePolling(interval);
      }
    } catch (e) {
      console.error(e);
      await this.wait();
      await this.subscribePolling(interval);
    }
  };

  @Watch('getNewArticlesCounter')
  sendNewNewsEvent(newValue: number, oldValue: number) {
    if (!!newValue && !oldValue) {
      try {
        window.kommersant.sendEvent('new_news', 'show');
      } catch {
        console.error(`Event new_news click not sent. kommersant.sendEvent not found`);
      }
    }
  }

  // Checks if browser has visibility API and tab is visible, returns
  checkVisibleTab() {
    let foundKey: string;
    let found: boolean = false;
    let keys: string[] = [
      'hidden',
      'webkitHidden',
      'mozHidden',
      'msHidden',
    ];
    for (let checkKey of keys) {
      //@ts-ignore
      if (document[checkKey]) {
        foundKey = checkKey;
        found = true;
      }
    }
    //@ts-ignore
    return !(found && document[foundKey])
  }

  /**
   * Compares two arrays and returns a number of elements presented in the newArr
   * but absent in oldArr
   * @param {number[]} newArr
   * @param {number[]} oldArr
   * @returns {number}
   */
  private checkNew(newArr: number[], oldArr: number[]) {
    const set = new Set([...newArr, ...oldArr]);
    return set.size - new Set(oldArr).size;
  }

  private extractIds(array: IDoc[]) {
    return array.map((elem: IDoc) => elem.DocId)
      .filter((elem) => !!elem)
  };

  private authorizedHandler() {
    console.log('Lenta authorizedHandler');
    const isAuthorized = this.getAuthorized;
    this.setAuthorized(true);
    if (!isAuthorized) {
      this.fetchArticlesData();
    }
  }

  private unauthorizedHandler() {
    console.log('Lenta unauthorizedHandler');
    const isAuthorized = this.getAuthorized;
    this.setAuthorized(false);
    this.setIsPersonalOnly(false);
    if (isAuthorized) {
      this.fetchArticlesData();
    }
  }


  created() {
    window.addEventListener(config.authorizedEvent, this.authorizedHandler);
    window.addEventListener(config.unauthorizedEvent, this.unauthorizedHandler);
    console.log('Lenta authorized listeners are set');
    if (getCookie(config.authorizedCookie)) {
      this.setAuthorized(true);
    } else {
      this.setAuthorized(false);
      this.setIsPersonalOnly(false);
    }

    window.addEventListener('resize', this.onResizeHandler);
    this.setLentaIsVertical();
  }

  beforeDestroy() {
    window.removeEventListener(config.authorizedEvent, this.authorizedHandler);
    window.removeEventListener(config.unauthorizedEvent, this.unauthorizedHandler);
    window.removeEventListener('resize', this.onResizeHandler);
  }

  throttlingTimeout!: Timeout | number | null;

  onResizeHandler() {
    clearTimeout(<Timeout>this.throttlingTimeout);
    // start timing for event "completion"
    this.throttlingTimeout = setTimeout(this.setLentaIsVertical, 500);
  }


  mounted() {
    this.fetchArticlesData()
    // TODO remove
    // this is needed for demo purposes
    // const newNewsArticle = () => {
    //     let interval = setInterval(() => {
    //         this.setIncreaseNewArticlesCounter();
    //         clearInterval(interval);
    //         newNewsArticle();
    //         // alert('from timer');
    //     }, Math.random() * 5000);
    // };
    // newNewsArticle();
    // TODO remove end


    // TODO this is the real function
    // this.subscribeLongPolling();
    setTimeout(() => {
      this.subscribePolling(config.pollingPeriod * 1000);
    }, config.pollingPeriod * 1000)

    // TODO this is the real function end


    // window.eventVar = new Event('kommersant:authorized');
    // window.eventVar1 = new Event('kommersant:unauthorized');

  }
}
