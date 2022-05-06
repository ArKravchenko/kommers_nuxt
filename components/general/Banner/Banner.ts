import {Component, Prop, Vue} from 'nuxt-property-decorator'



@Component({})
export default class Banner extends Vue {
  @Prop({
    type: Number,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) sizeY!: number;

  @Prop({
    type: Number,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) sizeX!: number;

  @Prop({
    type: Number,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) placeId!: number;

  get getRawHtml() {
    const id = Math.random();
//     return `
//     <!--AdFox START-->
// <!--yandex_Ar-Kravchenko-->
// <!--Площадка: localhost / * / *-->
// <!--Тип баннера: 300x300-->
// <!--Расположение: середина страницы-->
// <div id="adfox_${id}"></div>
// <script>
//     window.yaContextCb.push(()=>{
//         Ya.adfoxCode.create({
//             ownerId: 412640,
//             containerId: 'adfox_${id}',
//             params: {
//                 pp: 'h',
//                 ps: 'fryy',
//                 p2: 'hius'
//             }
//         })
//     })
// </script>
// `

    return `
     <div id="adfox_${id}"></div>
      <script>
        window.yaContextCb.push(()=>{
          Ya.adfoxCode.create({
            ownerId: 232598,
            containerId: 'adfox_${id}',
            params: {
              p1: 'bufhf',
              p2: 'fbao',
              'partner-stat-id': '34567'
            }
          })
        })
      </script>
    `
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

  }

  mounted() {
    this.runScripts();
    // console.log('Banner', this.placeId, this.sizeX, this.sizeY)
  }
}
