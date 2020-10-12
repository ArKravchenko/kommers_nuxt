import scssConfig from './config/scssConfig.ts'
import cacheConfig from './config/cacheConfig.ts'
import { version } from './package'

const scssVars = Object.keys(scssConfig).reduce(
  (acc, value) => `${acc} ${value}: ${scssConfig[value]};`,
  ''
)

export default {
  version,
  dev: process.env.NODE_ENV !== 'production',

  globalName: 'kommersant',

  cache: cacheConfig,

  // modern: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kommersant_new',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Here are all the variables and shared functions/mixins for sass
  styleResources: {
    scss: ['@/assets/scss/main.scss', '@/assets/scss/mixins.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/router',
      { fileName: 'router/router.ts', keepDefaultRouter: false },
    ],
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-ssr-cache',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isClient, isServer, loaders }) {
      loaders.scss.additionalData = scssVars
    },
  },
}
