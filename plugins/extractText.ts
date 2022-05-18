import Vue from "vue"
import type {ArticleLong} from "~/interfaces/API/MainPageApi";

declare module 'vue/types/vue' {
  interface Vue {
    $extractText: (obj: (string | ArticleLong.HTMLTagElement)[], acc?: string) => string
  }
}
Vue.prototype.$extractText = function (obj: (string | ArticleLong.HTMLTagElement)[], acc = ''){
  obj.forEach(el=>{
    if (!!el && typeof el == "string" ){
      acc+=obj;
    } else if (!!(<ArticleLong.HTMLTagElement>el).tagName
      && (<ArticleLong.HTMLTagElement>el).children?.length){
      this.extractText((<ArticleLong.HTMLTagElement>el).children, acc )
    }
  })
  return acc
}



