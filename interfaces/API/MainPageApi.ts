interface ImageSimple {
  src: string;
  alt: string;
}

interface ImageFull extends ImageSimple {
  webpSrcSet: string | null;
  jpegSrcSet: string | null;
}

namespace Actualno {
  enum ChangeTrend {
    positive = 1,
    negative = -1,
    stable = 0
  }

  interface IActualno {
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
      }
    }
  }

  export interface APIDataStructure extends IActualno {
  }
}

namespace SuperAnnounce {
  type Doc = {
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

  type Issue = {
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

  type Theme = {
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

  type SuperAnnounceData = null | IssueSA | ThemeSA | DocSA | CustomHtmlSA;

  interface ISuperAnnounce {
    data: {
      primary: SuperAnnounceData;
      secondary: SuperAnnounceData
    }
  }

  export interface APIDataStructure extends ISuperAnnounce {
  }

}

namespace Top {

  type Doc = {
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

namespace LightSpot {


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


  type ILightSpotItem = null | IQuote | IPhoto | IVideo | IChart | IDigit;

  interface ILightSpot {
    data: {
      items: ILightSpotItem[];
    }
  }

  export interface APIDataStructure extends ILightSpot {
  }

}

namespace MainToday {

  type Doc = {
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

namespace Opinions {

  type Opinion = {
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

namespace Multimedia {

  type MultimediaItem = {
    type: 'photo' | 'video' | 'podcast' | 'special' | 'visual'
    title: string;
    subtitle: string;
    tag: string;
    href: string;
    img: ImageSimple;
  }

  interface IMultimedia {
    data: {
      opinions: MultimediaItem[]
    }
  }

  export interface APIDataStructure extends IMultimedia {
  }

}

namespace Rubrics {

  type Doc = {
    title: string;
    subtitle: string;
    href: string;
    img: ImageFull;
  }

  type Rubric = {
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

namespace PromoGalleryTop {
  type PromoDoc = {
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

namespace PromoGalleryBottom {
  export interface APIDataStructure extends PromoGalleryTop.APIDataStructure {
  }
}

namespace CompanyNews {

  type NewsItem = {
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

namespace MostReadable {

  type Doc = {
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

namespace SpendTime {

  type Doc = {
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

namespace Vote {
  /*
  Поля этого интерфейса еще под вопросом, так как нужно детальнее изучать работу опросов,
  Это за рамками прототипа
   */

  type Answer = {
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

export namespace MainPageAPI {
  export interface Endpoint_1 extends Actualno.APIDataStructure{}

  // Лента не описывалась
  // export interface Endpoint_2 extends Lenta.APIDataStructure{}

  // Реклама не описывалась
  // interface Endpoint_3 extends Ads.APIDataStructure{}

  export interface Endpoint_4 {
    superAnnounce: SuperAnnounce.APIDataStructure;
    top: Top.APIDataStructure;
    ligthSpot: LightSpot.APIDataStructure;
    mainToday: MainToday.APIDataStructure;
    multimedia: Multimedia.APIDataStructure;
    rubrics: Rubrics.APIDataStructure;
    spendTime: SpendTime.APIDataStructure;
  }

  export interface Endpoint_5 extends PromoGalleryTop.APIDataStructure{}
  export interface Endpoint_6 extends PromoGalleryBottom.APIDataStructure{}
  export interface Endpoint_7 extends CompanyNews.APIDataStructure{}
  export interface Endpoint_8 extends Vote.APIDataStructure{}
  export interface Endpoint_9 extends MostReadable.APIDataStructure{}
}









