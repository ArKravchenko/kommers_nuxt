import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {SuperAnnounce} from "~/interfaces/API/MainPageApi";
import LazyHydrate from "vue-lazy-hydration";


@Component({
  components:{
    LazyHydrate
  }
})
export default class CustomHtmlSa extends Vue {
  @Prop({
    // type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) customHtmlSaData!: SuperAnnounce.ICustomHtmlSA | null;

  // cdnUrl: string = process.env.CDN_URL || ''

  get getDocs() {
    return this.customHtmlSaData?.content?.docsList?.length
    && this.customHtmlSaData.content.docsList
  }

  formatDate(date: Date){
    return new Date(date).toLocaleDateString('ru-ru',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute:'numeric'
      })
  }

  get getRawHtml(){
    return this.customHtmlSaData?.content?.customHtml?.length
    && this.customHtmlSaData.content.customHtml
  }

  // runScripts() {
  //   if (!this.getRawHtml) return
  //
  //   const fakeElement = document.createElement('div');
  //   fakeElement.innerHTML = this.getRawHtml;
  //
  //   const scriptsContainer = <Element>this.$refs.scripts
  //   let scripts = (fakeElement as Element).querySelectorAll('script');
  //
  //   const scriptsWithSrc = Array.from(scripts).filter(el => el.src)
  //   const scriptsWithInnerHtml = Array.from(scripts).filter(el => el.innerHTML)
  //
  //
  //   const loadedScripts = Array.from(scriptsWithSrc).map(script => {
  //     return new Promise(resolve => {
  //       const scriptElement = document.createElement('script');
  //       //@ts-ignore
  //       [...script.attributes].forEach(attr => {
  //         scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
  //         // console.log(attr.nodeName, attr.nodeValue)
  //       })
  //       scriptElement.setAttribute('defer', 'true')
  //       scriptElement.onload = function () {
  //         resolve(null)
  //       };
  //
  //       scriptsContainer.appendChild(scriptElement)
  //       script.remove()
  //     })
  //   })
  //
  //   Promise.all(loadedScripts).then(() => {
  //     Array.from(scriptsWithInnerHtml).forEach(script => {
  //       const scriptElement = document.createElement('script');
  //       //@ts-ignore
  //       [...script.attributes].forEach(attr => {
  //         scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
  //       })
  //       scriptElement.setAttribute('defer', 'true')
  //       scriptElement.innerHTML = script.innerHTML
  //       scriptsContainer.appendChild(scriptElement)
  //       script.remove()
  //     })
  //   })
  // }

  mounted(){
    // try {
    //   this.runScripts()
    // } catch (e) {
    //   console.error(e)
    // }
    //  console.log('this.customHtmlSaData', this.customHtmlSaData)
  }
}
