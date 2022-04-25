import scssConfig from './config/scssConfig'
import cacheConfig from './config/cacheConfig'
import {version} from './package.json'
import type {NuxtConfig} from '@nuxt/types'

// const scssVars = Object.keys(scssConfig).reduce(
//   (acc, value) => `${acc} ${value}: ${scssConfig[value]};`,
//   `@use "sass:string"; @use 'sass:math' as *; `
// )
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


const config: NuxtConfig = {
  version,
  dev: process.env.NODE_ENV !== 'production',
  loading: false,
  // modern: 'client',

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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', crossOrigin: 'true', href: 'https://p.typekit.net' },
      { rel: 'preconnect', crossOrigin: 'true', href: 'https://use.typekit.net' },
      { rel: 'preload', href: 'https://use.typekit.net/mfw2heq.css', as:'style' },
      {
        rel: 'stylesheet',
        media: 'print',
        href: 'https://use.typekit.net/mfw2heq.css',
        onload: 'this.onload=null;this.removeAttribute("media");'
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
    '@/serverMiddleware/headers.ts'
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

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/filters.ts',
    '@/plugins/errorCatcher.ts',
    {src:'@/plugins/vueLazyLoad.ts' , ssr: false},
    '@/plugins/imgPlaceholder.ts'
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
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // 'nuxt-ssr-cache',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60
      }
    ]
  ],

  render: {
    compressor: {},
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>{
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

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // publicPath: 'https://cdn.nuxtjs.org',
    extend(config, { isClient, isServer, loaders }) {
      // @ts-ignore
      loaders!.scss!.additionalData = scssVars
    },
    extractCSS: true,
    analyze: false,
    filenames: {
      // chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
      css: ({isDev}) => isDev ? '[name].css' : 'css/[name].[contenthash:7].css',
      app: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `js/[name].[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `js/chunk.[name][contenthash:7]${isModern ? '.modern' : ''}.js`,
    }
  },
}

export default config;
