// This is the copy of @nuxt/component cache to replace LRU for redis cache in future
import type {Module} from '@nuxt/types';
import LRU from 'lru-cache';
// import type LRUCache from "lru-cache";


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
  }
}

export default myModule


