// This is the copy of @nuxt/component cache to replace LRU for redis cache in future
import type {Module} from '@nuxt/types';
import LRU from 'lru-cache';
// import type LRUCache from "lru-cache";
// import RedisClient from 'ioredis'
// import type {RedisKey} from 'ioredis'

const myModule: Module<any> = async function (moduleOptions) {
  {
    if (this.options.render.ssr === false) {
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

      // this is the redis connection mimicking
      await new Promise((resolve)=>setTimeout(()=>{
        console.log('Component cache initialized')
        resolve(null)
      },3000))
       // console.log(this)


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
      //@ts-ignore
      // TODO has incompatible types
      this.options.render.bundleRenderer.cache = new LRUWithLog(Object.assign({
        max: 10000,
        maxAge: 1000 * 60 * 15,
        maxSize: (8192_000_000 / 8) / 2, //(8192_000_000/64)/2 is ~730 docs
        sizeCalculation: (v: { html:string }, k:string) => {
          const valueLength = v.html? v.html.length : JSON.stringify(v).length
          // console.log(k)
          return valueLength + k.length
        },
        // dispose: args.dispose,
        // length: args.length,
        allowStale: true
      }, moduleOptions))

    // const redisInstance = new RedisClient({lazyConnect:true})
    // await redisInstance.connect(()=>{
    //   console.log('redis connected')
    // })
    //
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
    //     console.log('set', key)
    //     const set = this.redisInstance.set(key, value.html)
    //     this.redisInstance.expire(key, this.options.ttl)
    //     return set;
    //   }
    //
    //   get(key: string, cb?: (res: any) => void): string | void {
    //     const result = this.redisInstance.get(key)
    //       .then(res => {
    //         console.log('get', key)
    //         cb ? cb({ components: [], html: res }) : undefined
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
    // this.options.render.bundleRenderer.cache = new RedisWithLog({ ttl: 60 * 24, redis: redisInstance })
  }
}

export default myModule


