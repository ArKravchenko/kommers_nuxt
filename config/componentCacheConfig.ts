const componentCacheConfig: any = {
  max:  Number(process.env.COMPONENT_CACHE_MAX) || 10000,
  //deprecated
  maxAge: process.env.COMPONENT_CACHE_ENABLED === 'true'
    ? Number(process.env.COMPONENT_CACHE_TTL) || 1000 * 60
    : 0,
  ttl: process.env.COMPONENT_CACHE_ENABLED === 'true'
    ? Number(process.env.COMPONENT_CACHE_TTL) || 1000 * 60
    : 0
}

console.log()
console.log('componentCacheConfig.max', componentCacheConfig.max)
console.log('componentCacheConfig.maxAge', componentCacheConfig.maxAge, 'ms')
console.log('componentCacheConfig.ttl', componentCacheConfig.ttl, 'ms')
console.log('COMPONENT_CACHE_ENABLED', process.env.COMPONENT_CACHE_ENABLED === 'true')
console.log()


export default componentCacheConfig
