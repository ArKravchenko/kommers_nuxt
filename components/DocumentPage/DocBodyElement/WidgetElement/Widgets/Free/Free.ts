import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ArticleLong} from "~/interfaces/API/MainPageApi";
import type {NuxtConfig} from "@nuxt/types";
import type {MetaInfo} from "vue-meta";
// import HtmlTagElement from '@/components/DocumentPage/DocBodyElement/HtmlTagElement/HtmlTagElement.vue'

@Component({
  // name is required for recursive components as Free uses DocBodyElement and vice versa
  name: 'Free',
  components: {
    // HtmlTagElement,
  }
})
export default class Free extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: MainPageAPI.Endpoint_4): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) freeWidgetData!: ArticleLong.Free | null;

  // cdnUrl: string = process.env.CDN_URL || '';

  head(): NuxtConfig['head'] {
    return this.headJson
  }

  headJson: MetaInfo = {
    script:[]
  }


  get getRawHtml(){
    return this.freeWidgetData?.rawHtml
      && this.freeWidgetData.rawHtml
  }

  observer!: IntersectionObserver;

  visible: boolean = false;

  mounted(){
    let options = {
      rootMargin: '200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entry,observer)=>{
      entry.forEach(({ isIntersecting })=>{
        if (isIntersecting){
          this.visible = true;
          this.headJson = {
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
                  this.headJson!.script!.push( {
                    hid:'kom2021.commonAsyncJs',
                    src:'//im.kommersant.ru/ContentFlex/Redesign2020/kom2021.commonAsyncJS.js?2204291421064306',
                    async: true
                  })
                  this.headJson = { ...this.headJson }
                }
              },
            ]
          }
          observer.disconnect()
        }
      })
    }, options);

    this.observer.observe(<Element>this.$refs.visibilityTarget);



    // console.log('this.freeWidgetData',this.freeWidgetData)
  }

  beforeUnmount(){
    this.observer.disconnect();
  }


}
