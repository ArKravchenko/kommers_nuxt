const pageCacheConfig = {
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
    if (route === '/') {
      return 'page:home:string';
    }
    let page = route.substr(1).split('/');
    page = page.join('.');
    // return false
    return `page:${page}:string`;
  },

  store: {
    type: 'memory',

    // maximum number of pages to store in memory
    // if limit is reached, least recently used page
    // is removed.
    max: Number(process.env.PAGE_CACHE_MAX) || 100,

    // number of seconds to store this page in cache
    ttl: process.env.PAGE_CACHE_ENABLED === 'true'
      ? Number(process.env.PAGE_CACHE_TTL) || 5:
      0 ,
    // dispose(key:string,value:string,reason:string,...rest:any){
    //   console.log('key',key)
    //   // console.log('value',value)
    //   console.log('reason',reason);
    //   console.log('rest',rest);
    // }
    // stale: true,
  },
}

console.log()
console.log('pageCacheConfig.max', pageCacheConfig.store.max)
console.log('pageCacheConfig.ttl', pageCacheConfig.store.ttl, 's')
console.log('PAGE_CACHE_ENABLED', process.env.PAGE_CACHE_ENABLED === 'true')
console.log()

export default pageCacheConfig
