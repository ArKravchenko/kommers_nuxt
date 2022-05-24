import scssConfig from './config/scssConfig'
import pageCacheConfig from './config/pageCacheConfig'
import componentCacheConfig from './config/componentCacheConfig'
import {version} from './package.json'
import type {NuxtConfig} from '@nuxt/types'
// import shrinkRay from 'shrink-ray-current'
import fs from 'fs-extra';
import path from 'path';
import pwaRuntimeCacheConfig from "./config/pwaRuntimeCacheConfig";

const log: any = [];
let interval = setInterval(() => {
  if (log.length > 0) {
    fs.ensureDir(path.resolve(__dirname, './logs/'))
    const preparedLog = log.reduce((acc: string, el: any) => {
      el.timings.ssrToApiSentStr = `${el.timings.ssrToApiSent - el.timings.browserToSsrReceived}`
      el.timings.apiToSsrReceivedStr = `${el.timings.apiToSsrReceived - el.timings.ssrToApiSent}`
      el.timings.ssrToClientSentStr = `${el.timings.ssrToClientSent - el.timings.apiToSsrReceived}`
      el[el.url] = `${el.url},  ${el.timings.ssrToApiSentStr}, ${el.timings.apiToSsrReceivedStr}, ${el.timings.ssrToClientSentStr}\n`
      return acc += el[el.url]
    }, '')
    fs.writeFileSync(path.resolve(__dirname, './logs/logs.csv'), preparedLog, { flag: 'a' })
    log.length = 0
    console.log('logs been written', path.resolve(__dirname, './logs/logs.csv'))
    // console.log(log)
  }
}, 2000)

const scssVars = `
@use "sass:string";
@use 'sass:math' as *;
$mobile_width: ${scssConfig.mobile_width}px;
$mobile_gap: ${scssConfig.mobile_gap}px;
$desktop_gap: ${scssConfig.desktop_gap}px;
$cell_size: ${scssConfig.cell_size}px;
$cell_size_large: ${scssConfig.cell_size_large}px;
$cell_gap: ${scssConfig.cell_gap}px;
$main_width: ${scssConfig.main_width}px;
$aside_size: ${scssConfig.aside_size}px;
$desktop1: ${scssConfig.desktop1}px;
$desktop3: ${scssConfig.desktop3}px;
$desktop_content: ${scssConfig.desktop_content}px;
$modal_width: ${scssConfig.modal_width}rem;
$modal_aside_width: ${scssConfig.modal_aside_width}rem;
$modal_outer_horizontal_gap: ${scssConfig.modal_outer_horizontal_gap}rem;
$modal_inner_horizontal_gap: ${scssConfig.modal_inner_horizontal_gap}rem;
$modal_scroll_width: ${scssConfig.modal_scroll_width}rem;
$modal_outer_vertical_gap: ${scssConfig.modal_outer_vertical_gap}rem;`;

//TODO make universal picture component
//TODO remove v-lazy
//TODO Make runScripts mixin
//TODO make common intersectionObserver
//TODO make $cdnUrl
//TODO make safe property getters everywhere (MainToday for example)
//TODO put DocBodyElement into separate lazy chunk everywhere it has cross references

const config: NuxtConfig = {
  version,
  dev: process.env.NODE_ENV !== 'production',
  loading: false,
  // modern: 'client',

  globalName: 'kommersant',

  cache: pageCacheConfig,

  // modern: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kommersant_new',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // { name: 'robots', content: 'noindex' },
    ],
    script: [
      {
        innerHTML: 'window.yaContextCb = window.yaContextCb || []',
        hid: 'yaContextCb'
      },
      // {
      //   src: 'https://yandex.ru/ads/system/context.js',
      //   async: true,
      //   body: true,
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', crossOrigin: 'true', href: '//im.kommersant.ru' },
      { rel: 'preconnect', crossOrigin: 'true', href: 'https://p.typekit.net' },
      { rel: 'preconnect', crossOrigin: 'true', href: 'https://use.typekit.net' },
      { rel: 'preload', href: 'https://use.typekit.net/mfw2heq.css', as: 'style' },
      {
        rel: 'stylesheet',
        // media print should not be used for fonts as it causes layout shift when fonts loaded after all other styles
        // media: 'print',
        // onload: 'this.onload=null;this.removeAttribute("media");'
        href: 'https://use.typekit.net/mfw2heq.css',
      },
      { rel: 'preconnect', crossOrigin: 'true', href: 'https://im.kommersant.ru' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/common.scss'
  ],

  serverMiddleware: [
    '@/serverMiddleware/timings.ts',
    // '@/serverMiddleware/headers.ts',
  ],

  // nuxt-font-loader config
  // fontLoader: {
  //   url: {
  //     custom: 'https://use.typekit.net/mfw2heq.css'
  //   },
  //   // Enable options
  //   prefetch: true,
  //   preconnect: true,
  //   stylesheet: true,
  // },

  // Here are all the variables and shared functions/mixins for sass
  styleResources: {
    scss: [
      '@/assets/scss/sassResources.scss',
    ],
    // hoistUseStatements: 'true'
  },

  //TODO replace v-lazy with v-lazytest self-written directive
  //TODO add picture tags with proper sizes and srcsets
  //TODO integrate swrv for server fetch requests

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/filters.ts',
    '@/plugins/errorCatcher.ts',
    // { src: '@/plugins/vueLazyLoad.ts', ssr: false },
    { src: '@/plugins/vueLazyLoadTest.ts', ssr: false },
    '@/plugins/imgPlaceholder.ts',
    '@/plugins/scssVars.ts',
    '@/plugins/extractText.ts',
    '@/plugins/globalComponents.ts'
  ],

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
    // 'nuxt-font-loader',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // 'nuxt-ssr-cache',
    //@ts-ignore
    ...((): NuxtConfig['modules'] => process.env.PAGE_CACHE_ENABLED === 'true'
      ? [
        'nuxt-ssr-cache'
      ] : [])(),
    //@ts-ignore
    ...((): NuxtConfig['modules'] => process.env.COMPONENT_CACHE_ENABLED === 'true'
      ? [[
        // '@nuxtjs/component-cache',
        '@/modules/componentCache.ts',
        componentCacheConfig
      ]] : [])(),

    '@nuxtjs/proxy',

    // ['@nuxtjs/localtunnel', { subdomain: 'kommersant' }],
  ],

  render: {
    compressor: {},//shrinkRay(),
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => {
        // console.log(preloadFiles)
        const typeKitUrl = 'https://use.typekit.net/mfw2heq.css';
        // return [`<${typeKitUrl}>; rel=preload; as=style`]

        const pushList = preloadFiles
          // .filter(f => f.asType === 'style')
          .filter(f => f.file.includes('app') || f.file.includes('runtime'))
          // .filter(f => f.asType === 'script' && f.file === 'runtime.js')
          .map(f => f.file.includes('chunk')
            ? `<${publicPath}${f.file}>; rel=prefetch; as=${f.asType}`
            : `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`
          )

        pushList.push(`<${typeKitUrl}>; rel=preload; as=style`)
        return pushList
      }

    }
  },

  hooks: {
    //@ts-ignore
    "vue-renderer": {
      ssr: {
        templateParams(templateParams: any, renderContext: any) {
          /**
           * IMPORTANT! THIS IS USED TOGETHER WITH STORE injectHeadModule
           * TO INJECT CUSTOM STYLES AND SCRIPTS STRINGS FROM THE ADMIN PANEL INTO A DOCUMENT
           */
          if (renderContext?.nuxt?.state?.injectHeadModule
            && renderContext?.nuxt?.state?.injectHeadModule.scripts) {
            templateParams.HEAD += renderContext.nuxt.state.injectHeadModule.scripts
          }

          if (renderContext?.nuxt?.state?.injectHeadModule
            && renderContext?.nuxt?.state?.injectHeadModule.styles) {
            templateParams.HEAD += renderContext.nuxt.state.injectHeadModule.styles
          }
        }
      }
    },
    render: {
      routeContext: (context) => {
        // timings, routeContext hook calls
        // right before all rendered data is sent to the recipient, allows adding some data into
        // window.__NUXT__
        // We use it to calculate the time needed for rendering
        context.state.timings.ssrToClientSent = Date.now()
      },
      beforeResponse(url: string, result: any, context: any) {

        // console.log(Object.keys(context.nuxt))

        if (context?.nuxt?.state?.timings) {
          log.push({ url, timings: context.nuxt.state.timings })
        }

      }
      // },
      // //@ts-ignore
      // 'vue-renderer': {
      //   ssr: {
      //     context: (context: any) => {
      //       // timings, routeContext hook calls
      //       // right before all rendered data is sent to the recipient, allows adding some data into
      //       // window.__NUXT__
      //       // We use it to calculate the time needed for rendering
      //       console.log(context.nuxt)
      //       // context.state.timings.ssrToClientSent = Date.now()
      //     },
      //   }
    },
    build: {
      done() {
        clearInterval(interval);
        fs.ensureDir(path.resolve(__dirname, './logs/'));
        fs.writeFileSync(path.resolve(__dirname, './logs/logs.csv'), 'url, ssrToApiSent [+ms], apiToSsrReceived [+ms], ssrToClientSent [+ms] \n', { flag: 'w' })
      }
    }
  },

  proxy: {
    '/ContentFlex': {
      target: "https://im.kommersant.ru/",
      // pathRewrite: { "^/ContentFlex": "" }
    },
    '/CorpImages': {
      target: "https://im.kommersant.ru/",
      // pathRewrite: { "^/ContentFlex": "" }
    },
    '/news': {
      target: "https://kommersant.ru/",
      secure: false
      // pathRewrite: { "^/ContentFlex": "" }
    },
  },

  server: {
    // Enables Server-Timing header
    // example: Server-Timing: act;dur=1058;desc="actualnoData fetch", total;dur=2314;desc="Nuxt Server Time"
    timing: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  pwa: {
    workbox: {
      enabled: false,
      runtimeCaching: pwaRuntimeCacheConfig
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: process.env.PUBLIC_PATH || '',
    extend(config, { isClient, isServer, loaders }) {
      // @ts-ignore
      loaders!.scss!.additionalData = scssVars;

      // this is to prevent conflicting with injected side bundles on a page
      if (config?.output) {
        config.output.jsonpFunction = 'kommersantWebpackJsonp'
      }
    },
    extractCSS: true,
    analyze: false,
    filenames: {
      // chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[name].[contenthash:7].css',
      app: ({
              isDev,
              isModern
            }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `js/[name].[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({
                isDev,
                isModern
              }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `js/chunk.[name][contenthash:7]${isModern ? '.modern' : ''}.js`,
    }
  },
}

if (process.env.ENABLE_LOCALHOST_HTTPS === "true") {
  config.server = {
    ...config.server, ...{
      https: {
        key: fs.readFileSync(path.resolve(__dirname, './certs/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, './certs/cert.pem'))
      }
    }
  }
}

export default config;
