import {Component, Mutation, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";

// import Vote from '@/components/MainPage/Vote/Vote.vue'
// import DocBodyElement from '@/components/DocumentPage/DocBodyElement/DocBodyElement.vue'
import DocHeader from '@/components/DocumentPage/DocHeader/DocHeader.vue';
import DocFooter from '@/components/DocumentPage/DocFooter/DocFooter.vue';
import ArticleSharing from '@/components/DocumentPage/ArticleSharing/ArticleSharing.vue';
import ErrorBoundary from '@/components/general/ErrorBoundary/ErrorBoundary.vue';
import type {MetaInfo} from "vue-meta";
import LazyHydrate from "vue-lazy-hydration";

// const Banner = () => import(
//   /* webpackChunkName: "Banner." */
//   /* webpackMode: "eager" */
//   "@/components/general/Banner/Banner.vue");




// TODO время прочтения выводить и на разводящей и в доке в одном формате
// TODO crumbs выводить и на разводящей и в доке в одном формате
@Component({
  //@ts-ignore
  // serverCacheKey(a:any) {
  //   // console.log(Object.keys(a.articleLongContent))
  //   return a.articleLongContent?.dataHash ? a.articleLongContent.dataHash : JSON.stringify(a)
  // },

  components:{
    // Vote,
    // DocBodyElement,
    DocHeader,
    DocFooter,
    ArticleSharing,
    // Banner,
    ErrorBoundary,
    LazyHydrate
  }
})
export default class ArticleLongContentRawHTML extends Vue {
  @Mutation('injectHeadModule/injectScriptsString') injectScriptsString!: (scriptsString: string) => void
  @Mutation('injectHeadModule/injectStylesString') injectStylesString!: (stylesString: string) => void

  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) articleLongContent!: ArticleLong.IArticleLong | null;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) preview!: boolean;

  head(): MetaInfo {
    return this.headJson
  }

  headJson: MetaInfo = {
    // title: this.getTitle ? this.$extractText(this.getTitle) : '',
  }

  get getSharingHref(){
    return this.articleLongContent?.data?.docId
      && `/doc/${this.articleLongContent.data.docId}`
  }

  get getStyles(){
    return this.articleLongContent?.data?.content?.htmlContent?.styles
      && this.articleLongContent.data.content.htmlContent.styles
  }

  get getScripts(){
    return this.articleLongContent?.data?.content?.htmlContent?.scripts
      && this.articleLongContent.data.content.htmlContent.scripts
  }

  runScripts(scriptsString: string, cb?:()=>void) {
    if (!scriptsString) return

    const fakeElement = document.createElement('div');
    fakeElement.innerHTML = scriptsString;

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
      if(cb) cb()
    })
  }




  get getReadingTime(){
    return this.articleLongContent?.data?.readingTime
      && this.articleLongContent.data.readingTime
  }


  get getTitle(){
    return this.articleLongContent?.data?.title?.length
    && this.articleLongContent.data.title
  }

  get getSubtitle(){
    return this.articleLongContent?.data?.subtitle?.length
      && this.articleLongContent.data.subtitle
  }

  get getHideTitles(){
    return this.articleLongContent?.data?.hideTitles
      && this.articleLongContent.data.hideTitles
  }

  get getPubDate(){
    return this.articleLongContent?.data?.pubDate
      && this.articleLongContent.data.pubDate
  }

  get getBreadcrumb(){
    return this.articleLongContent?.data?.breadcrumb
      && this.articleLongContent.data.breadcrumb
  }

  get getFooterData(){
    return this.articleLongContent?.data?.footer
      && this.articleLongContent.data.footer
  }

  // get getDocBodyElements(){
  //   return this.articleLongContent?.data?.content
  //     && !this.articleLongContent?.data?.content.isHtml
  //     && this.articleLongContent?.data?.content.docBodyElements?.length
  //     && this.articleLongContent.data.content.docBodyElements
  // }

  get getIsRawHtml(){
    return this.articleLongContent?.data?.content
      && this.articleLongContent.data.content.isHtml
  }

  get getRawHtml(){
    return this.articleLongContent?.data?.content
      && this.articleLongContent?.data?.content?.htmlContent
      && this.articleLongContent?.data?.content?.htmlContent?.rawHtml
      && this.articleLongContent.data.content.htmlContent.rawHtml
  }

  created(){
    /**
     * IMPORTANT! THIS IS USED TOGETHER WITH
     * vue-renderer:SSR:templateParams NUXT HOOK AND STORE injectHeadModule
     * TO INJECT CUSTOM STYLES AND SCRIPTS STRINGS FROM THE ADMIN PANEL INTO A DOCUMENT
     */
    if(this.$isServer){
      // this.getIsRawHtml
      // && this.injectScriptsString(`
      //   <script src="//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.commonJS.js?2204291421064306"></script>
      //   <script>
      //     kommersant.antiCache.jsMark = '//im.kommersant.ru/ContentFlex/js/jquery.mark.min.js?2109231134459908';
      //     kommersant.antiCache.jsJqueryValidate = '//im.kommersant.ru/ContentFlex/js/jquery.validate.min.js?2109231134459908';
      //     kommersant.antiCache.jsNanoScroller = '//im.kommersant.ru/ContentFlex/js/jquery.nanoscroller.min.js?2109231134459908';
      //     kommersant.antiCache.jsScrollMagic = '//im.kommersant.ru/ContentFlex/js/scrollmagic/ScrollMagic.min.js?2109231134459908';
      //     kommersant.antiCache.jsHighmapsCisDisputed = '//im.kommersant.ru/ContentFlex/js/highmaps/cis-disputed.js?2109231134459908';
      //     kommersant.antiCache.jsCharts = '//im.kommersant.ru/ContentFlex/js/charts.new2021.js?2202141653190991';
      //     kommersant.antiCache.jsWidgets = '//im.kommersant.ru/ContentFlex/js/widgets.new2021.js?2201111747301991';
      //     kommersant.antiCache.jsHighmapsWorldDisputed = '//im.kommersant.ru/ContentFlex/js/highmaps/world-disputed.js?2109231134459908';
      //   </script>
      //   <script defer src="//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.article.js?2204291421064306"></script>
      //   <script defer src="//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.commonAsyncJS.js?2204291421064306"></script>`)
      this.getScripts
      && this.injectScriptsString(`<script>${this.getScripts}</script>`)
      this.getStyles
      && this.injectStylesString(`<style>${this.getStyles}</style>`)
    }
  }

  mounted(){
    if (this.getIsRawHtml){
      this.headJson = {...this.headJson, ...{
          __dangerouslyDisableSanitizers: ['script'],
          script: [
            {
              hid:'commonJs',
              json: {},
              src:'//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.commonJS.js?2204291421064306',
              callback: () => {
                this.headJson!.script!.splice(1,0,      {
                  hid: 'kommersant.antiCache',
                  innerHTML: `
        kommersant.antiCache.jsMark = '//im.kommersant.ru/ContentFlex/js/jquery.mark.min.js?2109231134459908';
        kommersant.antiCache.jsJqueryValidate = '//im.kommersant.ru/ContentFlex/js/jquery.validate.min.js?2109231134459908';
        kommersant.antiCache.jsNanoScroller = '//im.kommersant.ru/ContentFlex/js/jquery.nanoscroller.min.js?2109231134459908';
        kommersant.antiCache.jsScrollMagic = '//im.kommersant.ru/ContentFlex/js/scrollmagic/ScrollMagic.min.js?2109231134459908';
        kommersant.antiCache.jsHighmapsCisDisputed = '//im.kommersant.ru/ContentFlex/js/highmaps/cis-disputed.js?2109231134459908';
        kommersant.antiCache.jsCharts = '//im.kommersant.ru/ContentFlex/js/charts.new2021.js?2202141653190991';
        kommersant.antiCache.jsWidgets = '//im.kommersant.ru/ContentFlex/js/widgets.new2021.js?2201111747301991';
        kommersant.antiCache.jsHighmapsWorldDisputed = '//im.kommersant.ru/ContentFlex/js/highmaps/world-disputed.js?2109231134459908';


        // var docsId = 5356567;
        // var ljDocsID = '5356567';
        // var objId = 5356567;
        //   var objType = 1;
        //     var tagType=3;
        //     var tagId=77;
        //   var docInfo = {
        //         publishing: {id: 86, name: 'Лента новостей (Москва)', url:'/archive/news/77'},
        // 	rubric:  {id:5, name:'Мир', url:'/rubric/5' },
        // 	section: null,
        // 	region: null,
        // 	authors: null,
        // 	rubrics: [{id:5,name:'Мир', url:'/rubric/5'}],
        // 	themes: [{id:3423,name:'Последние новости о военной операции на Украине', url:'/theme/3423'}],
        // 	dateRFC822: 'Wed, 18 May 2022 14:20:05 +0300'
        //   };
        //
        //     var ioInfo = {
        //         page_url: window.location.href,
        // 	page_url_canonical: 'https://www.kommersant.ru/doc/5356567',
        // 	page_title: 'Россия вышлет 24 итальянских дипломата',
        // 	page_type: 'article',
        // 	page_language: 'ru',
        // 	article_authors: [],
        // 	article_categories: ['Мир'],
        // 	article_subcategories:[],
        // 	article_publication_date: 'Wed, 18 May 2022 14:20:05 +0300'
        //     };
              `
                })
                this.headJson!.script!.push({
                  hid:'kom2021.article',
                  src:'//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.article.js?2204291421064306',
                  async: true
                });
                //@ts-ignore
                this.headJson!.script!.push( {
                  hid:'kom2021.commonAsyncJs',
                  src:'//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.commonAsyncJS.js?2204291421064306',
                  async: true,
                  callback:()=>{
                    if (this.getIsRawHtml && this.getRawHtml) {
                      this.runScripts(this.getRawHtml)
                    }
                  }
                })
                this.headJson = { ...this.headJson }
              }
            },
          ]
        }}
    }

    // this.runScripts(`<script>${this.getScripts}</script>`,()=>{
    //   if (this.getIsRawHtml && this.getRawHtml) {
    //     this.runScripts(this.getRawHtml)
    //   }
    // })



    // console.log('this.articleLongContent',this.articleLongContent)
  }


}
