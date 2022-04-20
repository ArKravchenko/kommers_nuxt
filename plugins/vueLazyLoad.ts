import Vue from "vue"
import VueLazyload, {} from "vue-lazyload"
import {IMG_PLACEHOLDER} from '@/config/constants';

// @ts-ignore
Vue.use(VueLazyload, {
  lazyComponent: false,
  observer: true,
  observerOptions: {
    rootMargin: '200px',
    threshold: 0
  },
  preLoad: 1.3,
  // attempt: 1,
  loading: IMG_PLACEHOLDER
});

