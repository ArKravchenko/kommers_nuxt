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
    const id = Math.random().toString();

    switch (this.placeId){
      case 300300:
        return banner300x300(id)
      case 300600:
        return banner300x600(id)
      case 600240:
        return banner600x240(id)
      case 970250:
        return banner970x250(id)
      default:
        return banner300x300(id)
    }
  }

  runScripts() {
    if (!this.getRawHtml) return

    const fakeElement = document.createElement('div');
    fakeElement.innerHTML = this.getRawHtml;

    const scriptsContainer = <Element>this.$refs.scripts
    let scripts = (fakeElement as Element).querySelectorAll('script');

    const scriptsWithSrc = Array.from(scripts).filter(el => el.src)
    const scriptsWithInnerHtml = Array.from(scripts).filter(el => el.innerHTML)


    const loadedScripts = Array.from(scriptsWithSrc).map(script => {
      return new Promise(resolve => {
        const scriptElement = document.createElement('script');
        //@ts-ignore
        [...script.attributes].forEach(attr => {
          scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
          // console.log(attr.nodeName, attr.nodeValue)
        })
        scriptElement.setAttribute('defer', 'true')
        scriptElement.onload = function () {
          resolve(null)
        };

        scriptsContainer.appendChild(scriptElement)
        script.remove()
      })
    })

    Promise.all(loadedScripts).then(() => {
      Array.from(scriptsWithInnerHtml).forEach(script => {
        const scriptElement = document.createElement('script');
        //@ts-ignore
        [...script.attributes].forEach(attr => {
          scriptElement.setAttribute(attr.nodeName, attr.nodeValue)
        })
        scriptElement.setAttribute('defer', 'true')
        scriptElement.innerHTML = script.innerHTML
        scriptsContainer.appendChild(scriptElement)
        script.remove()
      })
    })

  }

  observer!: IntersectionObserver;

  visible: boolean = false;

  mounted() {
    let options = {
      rootMargin: '200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,obsesrver)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){
          this.visible = true;
          this.runScripts();
          // alert(this.placeId)
          obsesrver.disconnect()
        }
      })
    }, options);

    this.observer.observe(<Element>this.$refs.scripts);
    // console.log('Banner', this.placeId, this.sizeX, this.sizeY)
  }

  beforeUnmount(){
    this.observer.disconnect();
  }
}

const banner300x300 = (id:string) => {
  return `
<!--AdFox START-->
<!--yandex_Ar-Kravchenko-->
<!--Площадка: localhost / Основное / Везде-->
<!--Категория: <не задана>-->
<!--Тип баннера: Тест 300х300-->
<div id="adfox_${id}"></div>
<script>
    window.yaContextCb.push(()=>{
        Ya.adfoxCode.create({
            ownerId: 412640,
            containerId: 'adfox_${id}',
            params: {
                p1: 'cublh',
                p2: 'hqpg'
            }
        })
    })
</script>

  `
}

const banner300x600 = (id: string) => {
  return `

  <!--AdFox START-->
<!--yandex_Ar-Kravchenko-->
<!--Площадка: localhost / Основное / Везде-->
<!--Категория: <не задана>-->
<!--Тип баннера: Тест 300х600-->
<div id="adfox_${id}"></div>
<script>
    window.yaContextCb.push(()=>{
        Ya.adfoxCode.create({
            ownerId: 412640,
            containerId: 'adfox_${id}',
            params: {
                p1: 'cubmb',
                p2: 'hqpi'
            }
        })
    })
</script>
  `
}

const banner970x250 = (id: string) => {
  return `
<!--AdFox START-->
<!--yandex_Ar-Kravchenko-->
<!--Площадка: localhost / Основное / Везде-->
<!--Категория: <не задана>-->
<!--Тип баннера: Тест 970х250-->
<div id="adfox_${id}"></div>
<script>
    window.yaContextCb.push(()=>{
        Ya.adfoxCode.create({
            ownerId: 412640,
            containerId: 'adfox_${id}',
            params: {
                p1: 'cubmc',
                p2: 'hqpj'
            }
        })
    })
</script>

  `
}

const banner600x240 = (id: string) => {
  return `
<!--AdFox START-->
<!--yandex_Ar-Kravchenko-->
<!--Площадка: localhost / Основное / Везде-->
<!--Категория: <не задана>-->
<!--Тип баннера: Тест 600x240-->
<div id="adfox_${id}"></div>
<script>
    window.yaContextCb.push(()=>{
        Ya.adfoxCode.create({
            ownerId: 412640,
            containerId: 'adfox_${id}',
            params: {
                p1: 'cubmd',
                p2: 'hqpk'
            }
        })
    })
</script>

  `
}
