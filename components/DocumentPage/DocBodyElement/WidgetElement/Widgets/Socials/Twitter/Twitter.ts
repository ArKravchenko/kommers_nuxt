import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
// import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Twitter uses DocBodyElement and vice versa
  name: 'Twitter',
  components: {
    // HtmlTagElement,
  }
})
export default class Twitter extends Vue {
  @Prop({
    // type: Object,
    // required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) socialsWidgetData!: ArticleLong.Socials | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  get getRawHtml(){
    return this.socialsWidgetData?.rawHtml
  }

  runScripts() {
    if (!this.getRawHtml) return

    const fakeElement = document.createElement('div');
    fakeElement.innerHTML = this.getRawHtml;

    const scriptsContainer = <Element>this.$refs.scripts
    let scripts = (fakeElement as Element).querySelectorAll('script');

    const scriptsWithSrc = Array.from(scripts).filter(el=>el.src)
    const scriptsWithInnerHtml = Array.from(scripts).filter(el=>el.innerHTML)


    const loadedScripts = Array.from(scriptsWithSrc).map(script=>{
      return new Promise(resolve=>{
        const scriptElement = document.createElement('script');
        //@ts-ignore
        [...script.attributes].forEach(attr => {
          scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
          // console.log(attr.nodeName, attr.nodeValue)
        })
        scriptElement.setAttribute('defer','true')
        scriptElement.onload = function(){resolve(null)};

        scriptsContainer.appendChild(scriptElement)
        script.remove()
      })
    })

    Promise.all(loadedScripts).then(()=>{
      Array.from(scriptsWithInnerHtml).forEach(script => {
        const scriptElement = document.createElement('script');
        //@ts-ignore
        [...script.attributes].forEach(attr => {
          scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
        })
        scriptElement.setAttribute('defer','true')
        scriptElement.innerHTML = script.innerHTML
        scriptsContainer.appendChild(scriptElement)
        script.remove()
      })
    })




    //TODO make scripts be executed one by one
    // Array.from(scripts).map(script => {
    //     const scriptElement = document.createElement('script');
    //     //@ts-ignore
    //     [...script.attributes].forEach(attr => {
    //       scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
    //       // console.log(attr.nodeName, attr.nodeValue)
    //     })
    //     // scriptElement.setAttribute('defer','true')
    //
    //     scriptElement.onload = function(){ console.log(this,!!script.innerHTML)}
    //
    //     setTimeout(() => {
    //       scriptElement.innerHTML = script.innerHTML
    //     }, 2000)
    //     scriptsContainer.appendChild(scriptElement)
    //   })
  }

  mounted(){
    this.runScripts()
    // console.log('this.socialsWidgetData Twitter',this.socialsWidgetData)
  }


}
