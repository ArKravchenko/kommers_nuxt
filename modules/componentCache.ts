// This is the copy of @nuxt/component cache to replace LRU for redis cache in future
import type {Module} from '@nuxt/types';
import LRU from 'lru-cache';
// import type LRUCache from "lru-cache";
// import RedisClient from 'ioredis'
// import type {RedisKey} from 'ioredis'

// function parseFunction(string:string) {
//   let funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
//   let match = funcReg.exec(string.replace(/\n/g, ' '));
//
//   if(match) {
//     return new Function(...match[1].split(','), match[2]);
//   }
//
//   return null;
// };

const myModule: Module<any> = async function (moduleOptions) {

  if (this.options.render.ssr === false || (this.options._build && !this.options.debug)) {
    // SSR Disabled
    return
  } else

    // Create empty bundleRenderer object if not defined
  if (typeof this.options.render.bundleRenderer !== 'object' || this.options.render.bundleRenderer === null) {
    this.options.render.bundleRenderer = {}
  }

  // Disable if cache explicitly provided in project
  if (this.options.render.bundleRenderer.cache) {
    return
  }


  class LRUWithLog extends LRU<string, string | void> {
    options!: any;

    constructor(options: any) {
      super(options);
      this.options = options
    }

    // set(key: string, value: string | void, options?: LRUCache.SetOptions<string, string | void>): this {
    //   // @ts-ignore
    //   // console.log(value)
    //   // @ts-ignore
    //   return super.set(key, value.html, options);
    // }
    //
    // // @ts-ignore
    // get(key: string, cb: (arg?:{ components: [], html: string }) => any) {
    //   const res = super.get(key, this.options);
    //   if (!res) cb();
    //   else cb({ components: [], html: res });
    //   return super.get(key, this.options);
    // }


  }

  // class RedisWithLog {
  //   options!: any;
  //   redisInstance!: RedisClient
  //
  //   constructor(options: { ttl:number,redis: RedisClient }) {
  //     this.redisInstance = options.redis;
  //     this.options = options
  //   }
  //
  //   set(key: RedisKey, value: any): Promise<'OK'> {
  //     // console.log('set', key)
  //     // console.log(value.components instanceof Set)
  //    // if(Array.from(value.components).length){
  //    //   //@ts-ignore
  //    //   console.log(Array.from(value.components)[0].toString())
  //    // }
  //    //  const components = Array.from(value.components).map((el:any)=>{
  //    //    return el.toString()
  //    //  })
  //    //  console.log('set', value.components)
  //    //  const cached = {components, html:value.html}
  //
  //     const set = this.redisInstance.set(key, value.html)
  //     this.redisInstance.expire(key, this.options.ttl)
  //     return set;
  //   }
  //
  //   get(key: string, cb?: (res?: any) => void): string | void {
  //     const result = this.redisInstance.get(key)
  //       .then(res => {
  //         // console.log('get', key)
  //         if(cb && res) {
  //           // const parsed = JSON.parse(res)
  //           // console.log(parsed.components)
  //
  //
  //           // const components = parsed.components.map((el:string)=>{
  //           //   return function (context:any){
  //           //     //@ts-ignore
  //           //     console.log(this)
  //           //     // 2.3 injection
  //           //     //@ts-ignore
  //           //     context = context || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
  //           //     // 2.2 with runInNewContext: true
  //           //     //@ts-ignore
  //           //     // if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
  //           //     //   //@ts-ignore
  //           //     //   context = __VUE_SSR_CONTEXT__
  //           //     // };
  //           //     // inject component styles
  //           //     //@ts-ignore
  //           //     if (injectStyles) {
  //           //       //@ts-ignore
  //           //       injectStyles.call(this, context)
  //           //     };
  //           //     // register component module identifier for async chunk inferrence
  //           //     if (context && context._registeredComponents) {
  //           //       //@ts-ignore
  //           //       context._registeredComponents.add(moduleIdentifier)
  //           //     };
  //           //   };
  //           //
  //           //   // return parseFunction(el)
  //           // })
  //           // components.forEach((el:any)=>{
  //           //   console.log(el.toString())
  //           // })
  //           // console.log(components)
  //
  //           //   cb(JSON.parse(res))
  //           cb({ components: [], html: res })
  //         }
  //         else if (cb){
  //           cb()
  //         }
  //       });
  //     // const res = { components: [], html: result }
  //     // const res = super.get(key, this.options);
  //     //   if (!res) cb();
  //     //   else cb({ components: [], html: res });
  //     // if (!res) cb();
  //     // else cb({ components: [], html: res });
  //     // return res
  //   }
  //
  //   has(key: string, cb?: (a: any) => any) {
  //     this.redisInstance.exists(key).then((res) => {
  //       cb ? cb(1 === res) : undefined
  //     })
  //   }
  // }
  //
  //
  // const redisInstance = new RedisClient({lazyConnect:true});
  // redisInstance.on('error', function (e) {
  //   console.error('Error occured in Redis client', e)
  // });
  // try {
  //   await redisInstance.connect((err, result)=>{
  //     if (!err){
  //       console.log('Redis connected')
  //       // @ts-ignore
  //       this.options.render.bundleRenderer.cache = new RedisWithLog({ ttl: 60 * 24, redis: redisInstance })
  //     } else {
  //       console.warn('Redis connect fail')
  //       console.warn('LRU cache initialized')
  //
  //       //@ts-ignore
  //       // TODO has incompatible types
  //       this.options.render.bundleRenderer.cache = new LRUWithLog(Object.assign({
  //         max: 10000,
  //         maxAge: 1000 * 60 * 15,
  //         maxSize: (8192_000_000 / 8) / 2, //(8192_000_000/64)/2 is ~730 docs
  //         sizeCalculation: (v: { html:string }, k:string) => {
  //           const valueLength = v.html? v.html.length : JSON.stringify(v).length
  //           // console.log(k)
  //           return valueLength + k.length
  //         },
  //         // dispose: args.dispose,
  //         // length: args.length,
  //         allowStale: true
  //       }, moduleOptions))
  //     }
  //
  //   })
  //
  //   const infoString = await redisInstance.info();
  //   console.log(infoString)
  // } catch (e) {
  //   console.error('Error occured while connecting Redis', e);
  //   await redisInstance.disconnect();
  // } finally {
  //
  // }


  //@ts-ignore
  this.options.render.bundleRenderer.cache = new LRUWithLog(Object.assign({
    max: 10000,
    maxAge: 1000 * 60 * 15,
    maxSize: (8192_000_000 / 8) / 2, //(8192_000_000/64)/2 is ~730 docs
    sizeCalculation: (v: { html: string }, k: string) => {
      const valueLength = v.html ? v.html.length : JSON.stringify(v).length
      // console.log(k)
      return valueLength + k.length
    },
    // dispose: args.dispose,
    // length: args.length,
    allowStale: true
  }, moduleOptions))


  // this is the redis connection mimicking
  await new Promise((resolve) => setTimeout(() => {
    console.log('Component cache initialized')
    resolve(null)
  }, 3000))
  // console.log(this.options)

}

export default myModule


