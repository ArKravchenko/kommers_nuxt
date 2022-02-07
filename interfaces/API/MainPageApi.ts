import {faker} from '@faker-js/faker';
import fs from 'fs'

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
      }
    }
  }

  export interface APIDataStructure extends IActualno {
  }
}

namespace SuperAnnounce {
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

  export type SuperAnnounceData = null | IssueSA | ThemeSA | DocSA | CustomHtmlSA;

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


  export type ILightSpotItem = null | IQuote | IPhoto | IVideo | IChart | IDigit;

  interface ILightSpot {
    data: {
      items: ILightSpotItem[];
    }
  }

  export interface APIDataStructure extends ILightSpot {
  }

}

namespace MainToday {

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

namespace Rubrics {

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

namespace PromoGalleryTop {
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

namespace PromoGalleryBottom {
  export interface APIDataStructure extends PromoGalleryTop.APIDataStructure {
  }
}

namespace CompanyNews {

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

namespace MostReadable {

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

namespace SpendTime {

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

namespace Vote {
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


export namespace MainPageAPI {
  export interface Endpoint_1 extends Actualno.APIDataStructure {
  }

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

const generateImageSimple = (): ImageSimple => {
  return {
    src: faker.image.imageUrl(),
    alt: faker.lorem.sentence(5)
  }
}

const generateImageFull = (): ImageFull => {
  const srcSet = faker.image.imageUrl();
  return {
    src: faker.image.imageUrl(),
    alt: faker.lorem.sentence(5),
    jpegSrcSet: srcSet,
    webpSrcSet: srcSet,
  }
}

const randomLength = (min: number, max: number) => min + Math.round(Math.random() * (max - min))


const generateEndpoint_1: () => MainPageAPI.Endpoint_1 = () => {

  const generateActualno = (): Actualno.IActualno => {
    return {
      data: {
        rates: {
          href: faker.internet.url(),
          usd: {
            href: faker.internet.url(),
            rate: faker.datatype.float({min: 70, max: 80, precision: 0.01}),
            changeTrend: faker.datatype.number({min: -1, max: 1}),
          },
          eur: {
            href: faker.internet.url(),
            rate: faker.datatype.float({min: 80, max: 100, precision: 0.01}),
            changeTrend: faker.datatype.number({min: -1, max: 1}),
          },
        }
      }
    }
  }

  return generateActualno()
}

const generateEndpoint_2: () => MainPageAPI.Endpoint_4 = () => {

  const generateSa = (): SuperAnnounce.SuperAnnounceData => {
    const Doc = (): SuperAnnounce.Doc => {
      return {
        title: faker.lorem.sentence(randomLength(3, 10)),
        subtitle: faker.lorem.sentence(randomLength(10, 15)),
        pubDate: faker.date.past(),
        href: faker.internet.url(),
      }
    }

    const Issue = (): SuperAnnounce.Issue => {
      return {
        title: faker.lorem.sentence(randomLength(1, 3)),
        subtitle: faker.lorem.sentence(randomLength(3, 5)),
        href: faker.internet.url(),
      }
    }

    const Theme = (): SuperAnnounce.Theme => {
      return {
        title: faker.lorem.sentence(randomLength(1, 3)),
        subtitle: faker.lorem.sentence(randomLength(3, 5)),
        href: faker.internet.url(),
      }
    }
    switch (faker.random.arrayElement(['doc', 'issue', 'theme', 'customHtml'])) {
      case 'doc':
        return {
          type: 'doc',
          content: {
            plashka: faker.word.noun(),
            img: generateImageSimple(),
            mainDoc: Doc(),
            docsList: Array.from({length: randomLength(1, 4)}).map(el => Doc()) as ReturnType<typeof Doc>[]
          },
        }
      case 'issue':
        return {
          type: 'issue',
          content: {
            plashka: faker.word.noun(),
            img: generateImageSimple(),
            issue: Issue(),
            docsList: Array.from({length: randomLength(1, 4)}).map(el => Doc()) as ReturnType<typeof Doc>[]
          }
        }
      case 'theme':
        return {
          type: 'theme',
          content: {
            plashka: faker.word.noun(),
            img: generateImageSimple(),
            theme: Theme(),
            docsList: Array.from({length: randomLength(1, 4)}).map(el => Doc()) as ReturnType<typeof Doc>[]
          }

        }
      case 'customHtml':
        return {
          type: 'customHtml',
          content: {
            customHtml: `<div> ${faker.lorem.paragraph()} </div>`,
            theme: Theme(),
            docsList: Array.from({length: randomLength(1, 4)}).map(el => Doc()) as ReturnType<typeof Doc>[]
          }
        }
    }
    return null
  }

  const generateTop = (): Top.APIDataStructure => {

    const Doc = (): Top.Doc => {
      return {
        title: faker.lorem.sentence(randomLength(3, 10)),
        exclusive: faker.datatype.boolean(),
        href: faker.internet.url(),
      }
    }

    return {
      data: {
        docs: Array.from({length: 10}).map(el => Doc()) as ReturnType<typeof Doc>[],
        partner: {
          title: faker.lorem.sentence(randomLength(3, 10)),
          href: faker.internet.url(),
        }
      }
    }

  }

  const generateLightSpot = (): LightSpot.APIDataStructure => {
    const generateLightSpotItem = (): LightSpot.ILightSpotItem => {
      switch (faker.random.arrayElement(['quote', 'photo', 'video', 'chart', 'digit'])) {
        case 'quote':
          return {
            type: 'quote',
            content: {
              plashka: faker.word.noun(),
              quote: faker.lorem.sentence(randomLength(5, 15)),
              href: faker.internet.url(),
              person: {
                img: generateImageSimple(),
                caption: faker.name.jobTitle(),
              }
            }
          }
        case 'photo':
          return {
            type: 'photo',
            content: {
              plashka: faker.word.noun(),
              caption: faker.lorem.sentence(randomLength(5, 15)),
              href: faker.internet.url(),
              img: generateImageSimple(),
            },
          }
        case 'video':
          return {
            type: 'video',
            content: {
              plashka: faker.word.noun(),
              caption: faker.lorem.sentence(randomLength(5, 15)),
              href: faker.internet.url(),
              img: generateImageSimple(),
            },
          }
        case 'chart':
          return {
            type: 'chart',
            content: {
              plashka: faker.word.noun(),
              caption: faker.lorem.sentence(randomLength(5, 15)),
              href: faker.internet.url(),
              img: generateImageSimple(),
            },
          }
        case 'digit':
          return {
            type: 'digit',
            content: {
              plashka: faker.word.noun(),
              caption: faker.lorem.sentence(randomLength(5, 15)),
              href: faker.internet.url(),
              digit: `${faker.datatype.number()} ${faker.lorem.sentence(randomLength(1, 3))}`,
            }
          }
      }
      return null
    }

    return {
      data: {
        items: Array.from({length: randomLength(1, 10)}).map(el=>generateLightSpotItem()) as ReturnType<typeof generateLightSpotItem>[],
      }
    }
  }

  const generateMainToday = (): MainToday.APIDataStructure => {
    const Doc = (): MainToday.Doc => ({
      title: faker.lorem.sentence(randomLength(3, 10)),
      subtitle: faker.lorem.sentence(randomLength(10, 15)),
      tag: faker.word.noun(),
      href: faker.internet.url(),
      img: generateImageFull(),
    });
    return {
      data: {
        docs: Array.from({length: 5}).map(el => Doc()) as ReturnType<typeof Doc>[]
      }
    }
  }

  const generateMultimedia = (): Multimedia.APIDataStructure => {
    const MultimediaItem = (): Multimedia.MultimediaItem => ({
      type: faker.random.arrayElement(['photo', 'video', 'podcast', 'special', 'visual']),
      title: faker.lorem.sentence(randomLength(3, 10)),
      subtitle: faker.lorem.sentence(randomLength(10, 15)),
      tag: faker.word.noun(),
      href: faker.internet.url(),
      img: generateImageSimple(),
    });
    return {
      data: {
        items: Array.from({length: randomLength(5, 10)}).map(el => MultimediaItem()) as ReturnType<typeof MultimediaItem>[]
      }
    }
  }

  const generateRubrics = (): Rubrics.APIDataStructure => {

    const Doc = (): Rubrics.Doc => ({
      title: faker.lorem.sentence(randomLength(3, 10)),
      subtitle: faker.lorem.sentence(randomLength(10, 15)),
      href: faker.internet.url(),
      img: generateImageFull(),
    })

    const Rubric = (): Rubrics.Rubric => ({
      title: faker.lorem.word(),
      href: faker.internet.url(),
      docs: Array.from({length: 5}).map(el => Doc()) as ReturnType<typeof Doc>[]
    });
    return {
      data: {
        rubrics: Array.from({length: 11}).map(el => Rubric()) as ReturnType<typeof Rubric>[]
      }
    }
  }

  const generateSpendTime = (): SpendTime.APIDataStructure => {

    const Doc = (): SpendTime.Doc => ({
      title: faker.lorem.sentence(randomLength(3, 10)),
      subtitle: faker.lorem.sentence(randomLength(10, 15)),
      href: faker.internet.url(),
      img: generateImageFull(),
      tag: faker.word.noun(),
    })

    return {
      data: {
        docs: Array.from({length: 11}).map(el => Doc()) as ReturnType<typeof Doc>[]
      }
    }
  }


  return {
    superAnnounce: {
      data: {
        primary: generateSa(),
        secondary: generateSa()
      }
    },
    top: generateTop(),
    ligthSpot: generateLightSpot(),
    mainToday: generateMainToday(),
    multimedia: generateMultimedia(),
    rubrics: generateRubrics(),
    spendTime: generateSpendTime(),
  }
}

const generateEndpoint_5_6: () => MainPageAPI.Endpoint_5 | MainPageAPI.Endpoint_6 = () => {

  const PromoDoc = ():PromoGalleryTop.PromoDoc  => ({
    title: faker.lorem.sentence(randomLength(3, 10)),
    subtitle: faker.lorem.sentence(randomLength(10, 15)),
    tag: faker.word.noun(),
    href: faker.internet.url(),
    img: generateImageSimple()
  })


  const generatePromoGallery = (): PromoGalleryTop.APIDataStructure => {
    return {
      data: {
        items: Array.from({length: 4}).map(el => PromoDoc()) as ReturnType<typeof PromoDoc>[]
      }
    }
  }

  return generatePromoGallery()
}

const generateEndpoint_7: () => MainPageAPI.Endpoint_7 = () => {

  const NewsItem = ():CompanyNews.NewsItem  => (
    {
      title: faker.lorem.sentence(randomLength(3, 10)),
      subtitle: faker.lorem.sentence(randomLength(10, 15)),
      href: faker.internet.url(),
      pubDate: faker.date.past(),
    })


  const generateCompanyNews = (): CompanyNews.APIDataStructure => {
    return {
      data: {
        title: faker.lorem.sentence(randomLength(3, 10)),
        href: faker.internet.url(),
        news: Array.from({length: 4}).map(el => NewsItem()) as ReturnType<typeof NewsItem>[]
      }
    }
  }

  return generateCompanyNews()
}

const generateEndpoint_8: () => MainPageAPI.Endpoint_8 = () => {

  const Answer = (): Vote.Answer => ({
    text: faker.lorem.sentence(randomLength(3, 10)),
    value: faker.datatype.number({min: 0, max: 9999}),
    name: faker.lorem.word(5),
  })


  const generateVote = (): Vote.APIDataStructure => {
    return {
      data: {
        resultsHref: faker.internet.url(),
        question: faker.lorem.sentence(randomLength(3, 10)).replace('.', '?'),
        questionId: faker.datatype.number({min: 1000, max: 9999}),
        regionId: faker.datatype.number({min: 0, max: 99}),
        uid: faker.datatype.number({min: 0, max: 9999}),
        redirectUrlOnClose: faker.internet.url(),
        answers: Array.from({length: randomLength(1, 10)}).map(el => Answer()) as ReturnType<typeof Answer>[]
      }
    }
  }

  return generateVote()
}

const generateEndpoint_9: () => MainPageAPI.Endpoint_9 = () => {

  const Doc = (): MostReadable.Doc => (
    {
      title: faker.lorem.sentence(randomLength(3, 10)),
      href: faker.internet.url(),
      img: generateImageFull(),
      views: faker.datatype.number({min: 0, max: 9999}),
    })


  const generateMostReadable = (): MostReadable.APIDataStructure => {
    return {
      data: {
        docs: Array.from({length: randomLength(1, 10)}).map(el => Doc()) as ReturnType<typeof Doc>[]
      }
    }
  }

  return generateMostReadable()
}



fs.writeFileSync('./MainPageApi_mock.json', JSON.stringify({
  Endpoint_1: generateEndpoint_1(),
  Endpoint_2: generateEndpoint_2(),
  Endpoint_5: generateEndpoint_5_6(),
  Endpoint_6: generateEndpoint_5_6(),
  Endpoint_7: generateEndpoint_7(),
  Endpoint_8: generateEndpoint_8(),
  Endpoint_9: generateEndpoint_9(),
}))






