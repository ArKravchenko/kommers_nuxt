const cacheConfig: any = {
  // if you're serving multiple host names (with differing
  // results) from the same server, set this option to true.
  // (cache keys will be prefixed by your host name)
  // if your server is behind a reverse-proxy, please use
  // express or whatever else that uses 'X-Forwarded-Host'
  // header field to provide req.hostname (actual host name)
  useHostPrefix: false,
  pages: [
    // these are prefixes of pages that need to be cached
    // if you want to cache all pages, just include '/'
    // '/page1',
    '/',
    // you can also pass a regular expression to test a path
    // /^\/page3\/\d+$/,

    // to cache only root route, use a regular expression
    // /^\/$/
  ],

  key(route: any, context: any) {
    // custom function to return cache key, when used previous
    // properties (useHostPrefix, pages) are ignored. return
    // falsy value to bypass the cache
  },

  store: {
    type: 'memory',

    // maximum number of pages to store in memory
    // if limit is reached, least recently used page
    // is removed.
    max: 100,

    // number of seconds to store this page in cache
    ttl: 60,
  },
}

export default cacheConfig
