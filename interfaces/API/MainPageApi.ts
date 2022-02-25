export interface ImageSimple {
  src: string;
  alt: string;
}

export interface ImageFull extends ImageSimple {
  webpSrcSet: string | null;
  jpegSrcSet: string | null;
}

export namespace Actualno {
  enum ChangeTrend {
    positive = 1,
    negative = -1,
    stable = 0
  }

  export type ActualnoItem = {
    title: string,
    href: string,
  }

  export interface IActualno {
    data: {
      rates: {
        href: string | null;
        usd: {
          href: string | null;
          rate: number;
          changeTrend: ChangeTrend;
        };
        eur: {
          href: string | null;
          rate: number;
          changeTrend: ChangeTrend;
        };
      },
      items: ActualnoItem[]
    }
  }

  export interface APIDataStructure extends IActualno {
  }
}

export namespace SuperAnnounce {
  export type Doc = {
    title: string;
    subtitle: string | null;
    pubDate: Date;
    href: string;
  }

  interface DocSA {
    type: 'doc';
    content: {
      plashka: string | null;
      img: ImageSimple;
      mainDoc: Doc;
      docsList: Doc[] | null
    }
  }

  export type Issue = {
    title: string;
    subtitle: string | null;
    href: string;
  }

  interface IssueSA {
    type: 'issue';
    content: {
      plashka: string | null;
      img: ImageSimple;
      issue: Issue;
      docsList: Doc[] | null
    }
  }

  export type Theme = {
    title: string;
    subtitle: string | null;
    href: string;
  }

  interface ThemeSA {
    type: 'theme';
    content: {
      plashka: string | null;
      img: ImageSimple;
      theme: Theme;
      docsList: Doc[] | null
    }
  }

  interface CustomHtmlSA {
    type: 'customHtml';
    content: {
      customHtml: string | null;
      theme: Theme;
      docsList: Doc[] | null
    }
  }

  export type SuperAnnounceData =  null | IssueSA | ThemeSA | DocSA | CustomHtmlSA;

  export interface ISuperAnnounce {
    data: {
      primary: SuperAnnounceData;
      secondary: SuperAnnounceData
    }
  }

  export type APIDataStructure = SuperAnnounceData
}

export namespace Top {

  export type Doc = {
    title: string;
    href: string;
    exclusive: boolean;
  }

  interface ITop {
    data: {
      docs: Doc[]
      partner: {
        title: string;
        href: string;
      }
    }
  }


  export interface APIDataStructure extends ITop {
  }

}

export namespace LightSpot {


  interface IQuote {
    type: 'quote'
    content: {
      plashka: string | null;
      quote: string;
      href: string;
      person: {
        img: ImageSimple;
        caption: string;
      }
    }
  }

  interface IPhoto {
    type: 'photo'
    content: {
      plashka: string | null;
      caption: string;
      href: string;
      img: ImageSimple;
    };
  }


  interface IVideo {
    type: 'video'
    content: {
      plashka: string | null;
      caption: string;
      href: string;
      img: ImageSimple;
    };
  }

  interface IChart {
    type: 'chart'
    content: {
      plashka: string | null;
      caption: string;
      href: string;
      img: ImageSimple;
    };
  }

  interface IDigit {
    type: 'digit'
    content: {
      plashka: string | null;
      caption: string;
      href: string;
      digit: string;
    };

  }


  export type ILightSpotItem = null | IQuote | IPhoto | IVideo | IChart | IDigit;

  interface ILightSpot {
    data: {
      items: ILightSpotItem[];
    }
  }

  export interface APIDataStructure extends ILightSpot {
  }

}

export namespace MainToday {

  // TODO нужно добавить возможность выводить кастомное название главного + ссылку,
  //  так как на разводящей  они настраиваются
  export type Doc = {
    title: string;
    subtitle: string;
    tag: string;
    href: string;
    img: ImageFull;
  }

  interface IMainToday {
    data: {
      // href: string
      docs: Doc[]
    }
  }

  export interface APIDataStructure extends IMainToday {
  }

}

export namespace Opinions {

  export type Opinion = {
    title: string;
    subtitle: string;
    tag: string;
    href: string;
    img: ImageSimple;
  }

  interface IOpinions {
    data: {
      opinions: Opinion[]
    }
  }

  export interface APIDataStructure extends IOpinions {
  }

}

export namespace Multimedia {

  export type MultimediaItem = {
    type: 'photo' | 'video' | 'podcast' | 'special' | 'visual'
    title: string;
    subtitle: string;
    tag: string;
    href: string;
    img: ImageSimple;
  }

  interface IMultimedia {
    data: {
      items: MultimediaItem[]
    }
  }

  export interface APIDataStructure extends IMultimedia {
  }

}

export namespace Rubrics {

  export type Doc = {
    title: string;
    subtitle: string;
    href: string;
    img: ImageFull;
  }

  export type Rubric = {
    title: string;
    href: string;
    docs: Doc[]
  }

  interface IRubrics {
    data: {
      rubrics: Rubric[]
    }
  }

  export interface APIDataStructure extends IRubrics {
  }

}

export namespace PromoGalleryTop {
  export type PromoDoc = {
    title: string;
    subtitle: string;
    tag: string;
    href: string;
    img: ImageSimple;
  }

  interface IPromoGallery {
    data: {
      items: PromoDoc[]
    }
  }

  export interface APIDataStructure extends IPromoGallery {
  }

}

export namespace PromoGalleryBottom {
  export interface APIDataStructure extends PromoGalleryTop.APIDataStructure {
  }
}

export namespace CompanyNews {

  export type NewsItem = {
    title: string;
    subtitle: string;
    href: string;
    pubDate: Date;
  }

  interface ICompanyNews {
    data: {
      title: string;
      href: string;
      news: NewsItem[]
    }
  }

  export interface APIDataStructure extends ICompanyNews {
  }

}

export namespace MostReadable {

  export type Doc = {
    title: string;
    href: string;
    img: ImageFull;
    views: number;
  }


  interface IMostReadable {
    data: {
      docs: Doc[]
    }
  }

  export interface APIDataStructure extends IMostReadable {
  }

}

export namespace SpendTime {

  export type Doc = {
    title: string;
    subtitle: string;
    href: string;
    img: ImageFull;
    tag: string;
  }


  interface ISpendTime {
    data: {
      docs: Doc[]
    }
  }

  export interface APIDataStructure extends ISpendTime {
  }

}

export namespace Vote {
  /*
  Поля этого интерфейса еще под вопросом, так как нужно детальнее изучать работу опросов,
  Это за рамками прототипа
   */

  export type Answer = {
    text: string;
    value: number;
    name: string;
  }


  interface IVote {
    data: {
      resultsHref: string;
      question: string;
      questionId: number;
      regionId: number;
      uid: number;
      redirectUrlOnClose: string
      answers: Answer[]
    }
  }

  export interface APIDataStructure extends IVote {
  }
}

export namespace RegionSideMenu {
  /*
  Поля этого интерфейса еще под вопросом, так как нужно детальнее изучать работу опросов,
  Это за рамками прототипа
   */

  export type RegionSideMenuItem = {
    title: string;
    href: string;
  }


  interface IRegionSideMenu {
    data: {
      items: RegionSideMenuItem[]
    }
  }

  export interface APIDataStructure extends IRegionSideMenu {
  }
}

export namespace ListPageDocs {
  /*
  Поля этого интерфейса еще под вопросом, так как нужно детальнее изучать работу опросов,
  Это за рамками прототипа
   */

  export type Tag = {
    text: string;
    href: string;
  }

  export type ListPageDoc = {
    title: string;
    subtitle: string;
    href: string;
    pubDate: Date;
    img: ImageFull;
    views: number;
    comments: number;
    tags: {
      main: Tag;
      rest: Tag[]
    }
  }


  interface IListPageDocs {
    data: {
      timestamp: number;
      docs: ListPageDoc[]
    }
  }

  export interface APIDataStructure extends IListPageDocs {
  }
}

export namespace ArticleLong {

  export type ArticleLongTag = {
    text: string;
    href: string;
    subscription: {
      type: number;
      id: number;
    }
  }

  export interface HTMLTagElement  {
    type: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'ol' | 'ul' | 'li' | 'hr' | 'a' | 'b' | 'i' | 'span';
    attributes: { [key: string]: string };
    children: string | HTMLTagElement[]
  }

  export type Incut = {
    type: 'incut'
    position: 'center' | 'right' | 'left'
    content: {
      img: ImageFull;
      href: string;
      title: string;
      text: string;
    }
  }

  export type Audio = {
    type: 'audio'
    content: {
      href: string;
      caption: string;
    }
  }

  type VoteAnswer = {
    text: string;
    value: number;
    name: string;
  }

  export type Vote = {
    type: 'vote'
    content: {
      resultsHref: string;
      question: string;
      questionId: number;
      regionId: number;
      uid: number;
      redirectUrlOnClose: string
      answers: VoteAnswer[]
    }
  }

  export type Citation = {
    type: 'citation'
    content: {
      text: string
    }
  }

  export type Spravka = {
    type: 'spravka'
    position: 'center' | 'right' | 'left'
    content: {
      href: string;
      title: string;
      bodyElements: DocBodyElement[]
    }
  }

  export type Illustration = {
    type: 'illustration'
    position: 'center' | 'right' | 'left'
    expandable: boolean; //может быть true только для широкой, это параметр указывающий можно ли открыть фото в darkGallery
    content: {
      img: ImageFull;
      caption: string;
      credentials: string;
    }
  }

  export type AdaptivePhoto = {
    type: 'adaptive_photo'
    expandable: boolean; // параметр указывающий можно ли открыть фото в darkGallery
    content: {
      imgDesktop: ImageFull;
      imgMobile: ImageFull;
      caption: string;
      credentials: string;
    }
  }

  export type Video = {
    type: 'video'
    expandable: boolean; // параметр указывающий можно ли открыть фото в darkGallery
    content: {
      embedHtml: string;
      caption: string;
      credentials: string;
    }
  }

  export type Photo = {
    type: 'photo'
    expandable: boolean; // параметр указывающий можно ли открыть фото в darkGallery
    content: {
      img: ImageFull;
      caption: string;
      credentials: string;
    }
  }

  export type GalleryPhoto = {
    img: ImageFull;
    imageId: number;
    caption: string;
    credentials: string;
  }

  export type Gallery = {
    type: 'gallery'
    expandable: boolean; // параметр указывающий можно ли открыть фото в darkGallery
    external: boolean;  // если виджет - внешняя галерея, то true, тогда
    content: {
      images: GalleryPhoto[];
      title: string; // title внешней док-галереи, если external==true, в противном случае игнорируется
      href: string; // ссылка на внешнюю док-галерею, если external==true, в противном случае игнорируется
    }
  }

  export type Collapse = { //врез расхлоп
    type: 'collapse'
    content: {
      defaultExpanded: boolean; // раскрыт ли по-умолчанию
      title: string;
      bodyElements: DocBodyElement[]
    }
  }


  export type WidgetElement = Collapse
    | Gallery
    | Photo
    | Video
    | AdaptivePhoto
    | Illustration
    | Spravka
    | Citation
    | Vote
    | Audio
    | Incut

  export type DocBodyElement = {
    element: 'tag'
    content: HTMLTagElement
  } | {
    element: 'widget'
    content: WidgetElement
  }

  // Описанный интерфейс преддполагает что каждый абзац в content не содержит вложенных тегов,
  // то есть схема справедлива для "новых" доков, созданных через предстоящую новую админку.
  // В старой админке внутрь тега <p> мог попасть встраиваемый код или другие вложенные теги, в том числе в тело дока в абзац
  // вписывали кастомный HTML со скриптами. Такие документа если и удастся распарсить, то не до конца, и все что прилетит ему в тело
  // придется вставлять как сырой HTML
  export interface IArticleLong {
    data: {
      docId: number;
      regionId: number;
      // дата обновления тела документа в базе, его принадлежности к рубрикам/темам,
      // включения/выключения комментов, нэтивролла etc
      // Вместе с docId будет использоваться для кеширования отдельных компонентов страницы в redis
      updatedAt: Date;

      meta: {
        commentsOff: boolean;
        nativeRollOff: boolean;
        noIndex: boolean;
        lazyLoadOff: boolean;
        puids: number[];
      },
      breadcrumb: {
        href: string,
        text: string
      };
      pubDate: {
        hideDate: boolean; // показывать дату публикации
        date: Date; // статья опубликована
        dateUpdate: Date; // статья обновлена(перепубликована)
      }
      title: string;
      titlePhoto: string; // title для показа на странице /gallery/{docId}
      subtitle: string;
      subtitlePhoto: string; // subtitle для показа на странице /gallery/{docId}
      vvodka: string;
      centralIllustration: WidgetElement;
      readingTime: string; // время на прочтение в формате готовом для отображения "1 мин."
      views: number; // количество просмотров, возможно можно вывести на отдельный эндпоинт и отображать только на фронте
      content: {
        isHtml: boolean;
        htmlContent: {
          rawHtml: string;
          styles: string;
          scripts: string;
        };
        authorLine: string;
        docBodyElements: DocBodyElement[]
      },
      // seo:{
      //     metaKeywords: string[];
      //     metaTitle: string;
      //     metaSubtitle: string;
      //     metaDesc: string;
      //     metaImage: ImageSimple;
      // },
      footer:{ // От этого проперти в принципе можно избавиться, вынеся issue authors themes на уровень вывше
        issue: {
          title: string;
          appendix: string;
          // если есть ссылка то в нее обернется title,
          // если нет то отобразится друг за другом title + appendix,
          // нужно для доков, которые публикуются до выхода печатного издания
          href: string;
        },
        authors: ArticleLongTag[],
        themes: ArticleLongTag[]
      }
    }
  }

  export interface APIDataStructure extends IArticleLong {
  }
}





export namespace MainPageAPI {
  export interface Endpoint_1 extends Actualno.APIDataStructure {
  }

  // Лента не описывалась
  // export interface Endpoint_2 extends Lenta.APIDataStructure{}

  // Реклама не описывалась
  // interface Endpoint_3 extends Ads.APIDataStructure{}

  export interface Endpoint_4 {
    superAnnounce: {
      data: {
        primary: SuperAnnounce.SuperAnnounceData,
        secondary: SuperAnnounce.SuperAnnounceData
      }
    };
    top: Top.APIDataStructure;
    ligthSpot: LightSpot.APIDataStructure;
    mainToday: MainToday.APIDataStructure;
    multimedia: Multimedia.APIDataStructure;
    rubrics: Rubrics.APIDataStructure;
    spendTime: SpendTime.APIDataStructure;
    opinions: Opinions.APIDataStructure
  }

  export interface Endpoint_5 extends PromoGalleryTop.APIDataStructure {
  }

  export interface Endpoint_6 extends PromoGalleryBottom.APIDataStructure {
  }

  export interface Endpoint_7 extends CompanyNews.APIDataStructure {
  }

  export interface Endpoint_8 extends Vote.APIDataStructure {
  }

  export interface Endpoint_9 extends MostReadable.APIDataStructure {
  }
}

export namespace ListPageAPI {
  export interface Endpoint_1 extends Actualno.APIDataStructure {
  }

  // Лента не описывалась
  // export interface Endpoint_2 extends Lenta.APIDataStructure{}

  // Реклама не описывалась
  // interface Endpoint_3 extends Ads.APIDataStructure{}

  interface Order {
    order: number
  }

  export interface Endpoint_4 {
    timestamp: number;
    superAnnounce: {
      data: SuperAnnounce.SuperAnnounceData
    };
    top: Top.APIDataStructure & Order;
    ligthSpot: LightSpot.APIDataStructure & Order;
    mainToday: MainToday.APIDataStructure & Order;
    multimedia: Multimedia.APIDataStructure & Order;
    opinions: Opinions.APIDataStructure & Order
  }

  export interface Endpoint_5 extends RegionSideMenu.APIDataStructure{
  }

  export interface Endpoint_6 extends ListPageDocs.APIDataStructure{
  }
}

export namespace DocPageAPI {
  export interface Endpoint_1 extends Actualno.APIDataStructure {
  }

  // Лента не описывалась
  // export interface Endpoint_2 extends Lenta.APIDataStructure{}

  // Реклама не описывалась
  // interface Endpoint_3 extends Ads.APIDataStructure{}

  export interface Endpoint_4 extends ArticleLong.APIDataStructure{

  }

  export interface Endpoint_5 extends Multimedia.APIDataStructure {
  }

  export interface Endpoint_6 extends MainToday.APIDataStructure {
  }

  export interface Endpoint_7 extends MostReadable.APIDataStructure {
  }

  export interface Endpoint_8 extends CompanyNews.APIDataStructure {
  }
}
