
const pwaRuntimeCacheConfig = [
  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://im.kommersant.ru/.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'imkommersantru-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 1000,
        // maxAgeSeconds: 10
      }
    }]
  },
  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://wt.kommersant.ru/.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'wtkommersantru-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 1000,
        // maxAgeSeconds: 10
      }
    }]
  },

  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://www.youtube.com/embed/.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'youtubeembed-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 1000,
        // maxAgeSeconds: 10
      }
    }]
  },
  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://vk.com/widget_post.php.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'vkwidgetpost-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 1000,
        // maxAgeSeconds: 10
      }
    }]
  },
  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://telegram.org/js/.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'telegramjs-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 10,
        // maxAgeSeconds: 10
      }
    }]
  },
  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://t.me/kommersant/.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'tmekommersant-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 1000,
        // maxAgeSeconds: 10
      }
    }]
  },
  {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    urlPattern: 'https://player.simplecast.com/.*',
    // Defaults to `NetworkFirst` if omitted
    handler: 'StaleWhileRevalidate',
    // Defaults to `GET` if omitted
    // method: 'GET'
    strategyOptions: {
      cacheName: 'playersimplecast-cache',
    },
    strategyPlugins: [{
      use: 'Expiration',
      config: {
        maxEntries: 1000,
        // maxAgeSeconds: 10
      }
    }]
  },

]



export default pwaRuntimeCacheConfig
